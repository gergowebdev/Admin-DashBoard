import type { AuthProvider } from "@refinedev/core";

import { API_URL, dataProvider } from "./data";

/**
 * For demo purposes and to make it easier to test the app, you can use the following credentials:
 */
export const authCredentials = {
    email: "michael.scott@dundermifflin.com",
    password: "demodemo",
};

export const authProvider: AuthProvider = {
    login: async ({ email }) => {
        try {
            // call the login mutation
            // dataProvider.custom is used to make a custom request to the GraphQL API
            // this will call dataProvider which will go through the fetchWrapper function
            const { data } = await dataProvider.custom({
                url: API_URL,
                method: "post",
                headers: {},
                meta: {
                    variables: { email },
                    rawQuery: `
                mutation Login($email: String!) {
                    login(loginInput: {
                      email: $email
                    }) {
                      accessToken,
                    }
                  }
                `,
                },
            });

            localStorage.setItem("access_token", data.login.accessToken);

            return {
                success: true,
                redirectTo: "/",
            };
        } catch (e) {
            const error = e as Error;

            return {
                success: false,
                error: {
                    message:
                        "message" in error ? error.message : "Login failed",
                    name:
                        "name" in error
                            ? error.name
                            : "Invalid email or password",
                },
            };
        }
    },

    // simply remove the accessToken from localStorage for the logout
    logout: async () => {
        localStorage.removeItem("access_token");

        return {
            success: true,
            redirectTo: "/login",
        };
    },

    onError: async (error) => {
        if (error.statusCode === "UNAUTHENTICATED") {
            return {
                logout: true,
                ...error,
            };
        }

        return { error };
    },

    check: async () => {
        try {
            // get the identity of the user
            // this is to know if the user is authenticated or not
            await dataProvider.custom({
                url: API_URL,
                method: "post",
                headers: {},
                meta: {
                    rawQuery: `
                    query Me {
                        me {
                          name
                        }
                      }
                `,
                },
            });

            // if the user is authenticated, redirect to the home page
            return {
                authenticated: true,
                redirectTo: "/",
            };
        } catch (error) {
            return {
                authenticated: false,
                redirectTo: "/login",
            };
        }
    },

    // get the user information
    getIdentity: async () => {
        const accessToken = localStorage.getItem("access_token");

        try {
            // call the GraphQL API to get the user information
            const { data } = await dataProvider.custom<{ me: any }>({
                url: API_URL,
                method: "post",
                headers: accessToken
                    ? {
                          Authorization: `Bearer ${accessToken}`,
                      }
                    : {},
                meta: {
                    rawQuery: `
                    query Me {
                        me {
                            id,
                            name,
                            email,
                            phone,
                            jobTitle,
                            timezone
                            avatarUrl
                        }
                      }
                `,
                },
            });

            return data.me;
        } catch (error) {
            return undefined;
        }
    },
};

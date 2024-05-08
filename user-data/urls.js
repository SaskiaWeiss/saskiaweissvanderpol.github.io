const githubUsername = "IvanWeissVanDerPolGH";

const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;

export const URLs = {
    gitConnected: createGitConnectedURL(githubUsername),
};

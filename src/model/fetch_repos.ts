/*
    Comment:
    This was used locally when developing the site but is not present on the Github Pages due to the token being visible in the source code.
    This is because the page is client side and to avoid needing to host a server, this fetch code is replaced by static data. 
*/


let GITHUB_TOKEN: string = import.meta.env.VITE_GITHUB_TOKEN as string;

export class Repo {
    name: string;
    description: string;
    html_url: string;
    languages: string[]

    constructor(name: string, description: string, html_url: string, languages: string[]) {
        this.name = name;
        this.description = description;
        this.html_url = html_url;
        this.languages = languages;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getHtmlUrl() {
        return this.html_url;
    }
}

/*
    Due to rate-limits with the GitHub API, we allow for caching to reduce the number of API calls.
    Fetches my repositories from the GitHub API and filters them based on the number of commits as I don't want to show all repositories. 
    Qualifiers are found here: https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories#search-by-when-a-repository-was-created-or-last-updated
    There is no direct way to filter repositories based on the number of commits, so we fetch the last 5 commits for each repository and filter based on that.
*/
export const fetchRepos = async ({
    setRepos,
    setLoading,
    minCommits = 5,
    reposCount = 10,
    cacheKey,
    cacheExpiryTime = 3600 // 1 hour in seconds

}: {
    setRepos: (repos: Repo[]) => void;
    setLoading: (loading: boolean) => void;
    cacheKey: string;
    minCommits?: number;
    reposCount?: number;
    cacheExpiryTime?: number
}) => {

    setLoading(true);
    const cachedData = localStorage.getItem(cacheKey);
    const now = Date.now() / 1000.0; // Convert to seconds

    if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        const { timestamp, repos } = parsedData;

        if (now - timestamp < cacheExpiryTime) {
            console.log("Loaded from cache, did not fetch from API");
            setRepos(repos);
            setLoading(false);
            return;
        }

        localStorage.removeItem(cacheKey); // Clear cache
        console.log("Cache expired, fetching from API");
    }

    const url = "https://api.github.com/users/Dubstepzedd/repos?sort=pushed&per_page=100";
    try {
        const response = await fetch(url, { 
            headers: { 
                Accept: "application/vnd.github.v3+json",
                Authorization: `token ${GITHUB_TOKEN}`
            } 
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);
        
        const repos = await response.json();

        const filteredRepos = [];
        for (const repo of repos) {
            const commitsUrl = `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?per_page=5`;
            const commitsResponse = await fetch(commitsUrl, { 
                headers: { 
                    Accept: "application/vnd.github.v3+json",
                    Authorization: `token ${GITHUB_TOKEN}`
                } 
            });
            if (!commitsResponse.ok) continue;

            const commits = await commitsResponse.json();
            if (commits.length >= minCommits) {

                // Fetch languages for the repository
                const languagesUrl = repo.languages_url;
                const languagesResponse = await fetch(languagesUrl, { 
                    headers: { 
                        Accept: "application/vnd.github.v3+json",
                        Authorization: `token ${GITHUB_TOKEN}`
                    } 
                });
                const languages = languagesResponse.ok
                    ? Object.keys(await languagesResponse.json())
                    : [];

                filteredRepos.push({
                    ...repo,
                    languages,
                });
            }
            
            // Stop if we've already found 10 repositories
            if (filteredRepos.length >= reposCount) break;
        }
        
        const reposList = filteredRepos.map(
            (item: any) =>
                new Repo(
                    item.name,
                    item.description,
                    item.html_url,
                    item.languages 
                )
        );

        localStorage.setItem(
            cacheKey,
            JSON.stringify({ repos: reposList, timestamp: now })
        );

        // Map to Repo class and update state
        setRepos(reposList);

    } catch (error) {
        console.error(error);
    }

    setLoading(false); // Ensure loading state is reset on error
};

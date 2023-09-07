import {tickerTrie, companyTrie} from './Trie'

const tickerSearch = (query: string) =>
{
    const tickerResults = tickerTrie.search(query);
    return tickerResults;
}

const companySearch = (query: string) =>
{
    const companyResults = companyTrie.search(query);
    return companyResults;
}

const search = (query: string) =>
{
    const tickerResults = tickerSearch(query);
    const companyResults = companySearch(query);

    const combinedResults = [...tickerResults, ...companyResults];

    return combinedResults.slice(0, 6);
}

export {tickerSearch, companySearch, search};
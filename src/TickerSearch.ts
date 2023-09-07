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


import {Pair, TickerData} from '../types'
import tickers from './data/tickers.json'

const tickerPairs: Array<[number, TickerData]> = Object.entries(tickers).map(([index, data]) => [Number(index), data as TickerData]);

class TrieNode {
    children: { [key: string]: TrieNode };
    endOfWord: boolean;
    pairs: Pair[];

    constructor() {
        this.children = {};
        this.endOfWord = false;
        this.pairs = [];
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string, pair: Pair) {
        word = word.toLowerCase();
        let currentNode = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }

            currentNode = currentNode.children[char];
        }

        currentNode.endOfWord = true;
        currentNode.pairs.push(pair);
    }

    _getPairsWithPrefix(prefix: string, node: TrieNode) {
        const pairs: Pair[] = [];
        if (node.endOfWord) {
            pairs.push(...node.pairs);
        }

        for (let char in node.children) {
            const child = node.children[char];
            const results = this._getPairsWithPrefix(prefix + char, child);
            pairs.push(...results);
        }
        return pairs;
    }

    search(prefix: string) {
        prefix = prefix.toLowerCase();

        let currentNode = this.root;

        for (let i = 0; i < prefix.length; i++)
        {
            const char = prefix[i];
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char];
            }
            else {
                return [];
            }
        }

        let pairs = this._getPairsWithPrefix(prefix, currentNode);
        pairs.sort((a, b) => a.index - b.index);
        pairs = pairs.slice(0, 6);

        return pairs;
    }

}

const tickerTrie = new Trie();
const companyTrie = new Trie();

tickerPairs.forEach(([index, { ticker, title }]) => 
{
    const pair = {index, ticker, companyName: title};
    tickerTrie.insert(ticker, pair);
    companyTrie.insert(title, pair);
})

export {tickerTrie, companyTrie};
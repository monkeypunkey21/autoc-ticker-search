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
        
    }

    search(prefix: string) {

    }

}

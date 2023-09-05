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



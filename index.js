import {  ECPairFactory } from 'ecpair';
import * as bitcoin from 'bitcoinjs-lib';
import * as tinysecp from 'tiny-secp256k1';

const ECPair = ECPairFactory(tinysecp);
const testNet = bitcoin.networks.testnet;

// several types of fucking addresses on bitcoin testnet/mainnet
// to be indentified by the fucking prefixes
// we need ones with "tb1" to work with
// This is P2WPKH/P2WSH addresses (Pay-to-Witness-Public-Key-Hash/Script Hash) 


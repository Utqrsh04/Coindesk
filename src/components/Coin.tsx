import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Coin.css";

const Coin = () => {
  const history = useHistory();
  const coinName: any = history.location.pathname.split("/")[1];

  const [coinData, setCoinData] = useState<any>();
  useEffect(() => {
    axios
      .get(
        ` https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false `
      )
      .then((res: any) => {
        setCoinData(res.data);
      })
      .catch((error: any) => console.error(error));
  }, [coinName]);

  console.log("Coin Data ", coinData);

  const desc =
    coinData && coinData.description.en.replace(/<a[^>]*>|<\/a>/g, "");

  return (
    <>
      {coinData && (
        <div>
          <div className="button" id="btn">
            <div id="circle"></div>
            <Link to="/home" className="font-bold">
              All Coins
            </Link>
          </div>
          <h1 className="flex text-white justify-center font-extrabold text-2xl items-center py-5">
            <img src={coinData.image.large} className="w-10 h-10 mr-7" alt="" />
            {coinData.name}
          </h1>
          <p className="text-sm text-justify">{desc}</p>

          <div className="py-5 text-sm text-white">
            <h2>Last Updated : {coinData.last_updated}</h2>
            <h2>Genesis date : {coinData.genesis_date}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Coin;

// https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false

// {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "asset_platform_id": null,
//     "platforms": {
//       "": ""
//     },
//     "block_time_in_minutes": 10,
//     "hashing_algorithm": "SHA-256",
//     "categories": [
//       "Cryptocurrency"
//     ],
//     "public_notice": null,
//     "additional_notices": [],
//     "description": {
//       "en": "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href=\"https://www.coingecko.com/en?hashing_algorithm=SHA-256\">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href=\"https://www.coingecko.com/en/coins/litecoin\">Litecoin</a>, <a href=\"https://www.coingecko.com/en/coins/peercoin\">Peercoin</a>, <a href=\"https://www.coingecko.com/en/coins/primecoin\">Primecoin</a>, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href=\"https://www.coingecko.com/en/coins/ethereum\">Ethereum</a> which led to the development of other amazing projects such as <a href=\"https://www.coingecko.com/en/coins/eos\">EOS</a>, <a href=\"https://www.coingecko.com/en/coins/tron\">Tron</a>, and even crypto-collectibles such as <a href=\"https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos\">CryptoKitties</a>."
//     },
//     "links": {
//       "homepage": [
//         "http://www.bitcoin.org",
//         "",
//         ""
//       ],
//       "blockchain_site": [
//         "https://blockchair.com/bitcoin/",
//         "https://btc.com/",
//         "https://btc.tokenview.com/",
//         "",
//         ""
//       ],
//       "official_forum_url": [
//         "https://bitcointalk.org/",
//         "",
//         ""
//       ],
//       "chat_url": [
//         "",
//         "",
//         ""
//       ],
//       "announcement_url": [
//         "",
//         ""
//       ],
//       "twitter_screen_name": "bitcoin",
//       "facebook_username": "bitcoins",
//       "bitcointalk_thread_identifier": null,
//       "telegram_channel_identifier": "",
//       "subreddit_url": "https://www.reddit.com/r/Bitcoin/",
//       "repos_url": {
//         "github": [
//           "https://github.com/bitcoin/bitcoin",
//           "https://github.com/bitcoin/bips"
//         ],
//         "bitbucket": []
//       }
//     },
//     "image": {
//       "thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
//       "small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579",
//       "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
//     },
//     "country_origin": "",
//     "genesis_date": "2009-01-03",
//     "sentiment_votes_up_percentage": 85.03,
//     "sentiment_votes_down_percentage": 14.97,
//     "market_cap_rank": 1,
//     "coingecko_rank": 2,
//     "coingecko_score": 81.001,
//     "developer_score": 101.328,
//     "community_score": 71.217,
//     "liquidity_score": 100.007,
//     "public_interest_score": 0,
//     "developer_data": {
//       "forks": 30106,
//       "stars": 57442,
//       "subscribers": 3843,
//       "total_issues": 6502,
//       "closed_issues": 5891,
//       "pull_requests_merged": 9029,
//       "pull_request_contributors": 750,
//       "code_additions_deletions_4_weeks": {
//         "additions": 4475,
//         "deletions": -1340
//       },
//       "commit_count_4_weeks": 371,
//       "last_4_weeks_commit_activity_series": [
//         2,
//         2,
//         6,
//         6,
//         8,
//         7,
//         6,
//         2,
//         11,
//         6,
//         3,
//         9,
//         12,
//         2,
//         2,
//         7,
//         16,
//         9,
//         3,
//         5,
//         0,
//         0,
//         2,
//         8,
//         5,
//         0,
//         0,
//         0
//       ]
//     },
//     "public_interest_stats": {
//       "alexa_rank": 9440,
//       "bing_matches": null
//     },
//     "status_updates": [],
//     "last_updated": "2021-10-08T16:22:22.150Z"
//   }

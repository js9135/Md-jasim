import React, { useState } from "react";
import { Row, Col, Container, Button, ModalHeader, ModalFooter, Modal, ModalBody } from "reactstrap";
import $ from "jquery";
import hero from '../../images/hero.png';
import Header from '../header.js';
import Footer from '../footer.js';
import search from '../../images/search.png';
import big from '../../images/big.png';
import play from '../../images/play.png';
import NFT_STAKE_ABI from "../../../Config/NFT_STAKE_ABI.json"
import TOKEN_ABI from "../../../Config/TOKEN_ABI.json"
import Config, { NFT, NFT_STAKE } from "../../../Config"
import Web3 from "web3"
import { useEffect } from 'react';
import { useWallet } from '@binance-chain/bsc-use-wallet'
import ConnectButton from '../../services/ConnectButton'
import add from '../../images/add.gif';
import StakeCard from "./StakeCard";
import WIZARD from '../../images/add.gif';
import ORDINARY from '../../images/Ordinary.gif';
import EPIC from '../../images/Epic.gif';
import RARE from '../../images/Rare.gif';
import { func } from "prop-types";
import AUTOSHARK from '../../images/AUTOSHARK.gif';
import DMTNT from '../../images/DMTNT.gif';
import BabyNFT from '../../images/BabyNFT.gif';
import NFB from '../../images/BananaWIZARDs.gif';
import MCS from '../../images/MoonCafeSloth.gif';

import ROUTER_ABI from "../../../Config/ROUTER_ABI.json"
import NFWolfPup from '../../images/NFWolfPup.gif';
import BK from '../../images/BananaKing.gif';


import BBQG from '../../images/BarbecueNFT.gif';
import SQ from '../../images/SquirrelNFT.gif';
import OWL from '../../images/OwlNFTFARM.gif';
import SING from '../../images/SingularfarmNFT.gif';
import MDF from '../../images/MDFNFT.gif';
import CL from '../../images/Lovesswap.gif';
import GT from '../../images/GT.gif';
import PEAR from '../../images/PEAR.gif';
import MPS from '../../images/MPS.gif';
import BTCG from '../../images/BTCG.gif';
import PMDB from '../../images/PMDB.gif';
import DSG from '../../images/DSG.gif';
import CDP from '../../images/CDP.gif';
import TRIBOT from '../../images/TRIBOT.gif';

const STAKE_CONTRACT =
    [
        { address: '0x5f1339928498A858BB57658Af49c5081A22be336', nft: '0x6f72b2B251c753C4Af1D81b141862571e83376B5', image: TRIBOT, status: 1, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x5BE4E0B21A26A1Fda89B56bBF261915Ef116B80a', nft: '0xF52687C5abde0d50a29e09BBBBf000e591d62C3D', image: CDP, status: 1, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x7b0bCe1637Ae3D960C2F9CF3C520Dd489184F5Ac', nft: '0x0f1EE2b911EFE445E1533043A61cd1Ed90D224b6', image: DSG, status: 1, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x165b653cbA04DcE682e8f5C0ff9C31D691639810', nft: '0xd986cb1060fA2717E6df3C8D8C492c28ccDfC69C', image: PMDB, status: 1, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },

        { address: '0x436b1C5E366991a8F883E0dB806b8B976258a6AE', nft: '0x712CC8EB5af53bfa063cc059839B6DB200Cc2536', image: BTCG, status: 1, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },


        { address: '0xBEe4B61f70dAa6FB235B1d275c46d468E93F6a53', nft: '0x10755b6b4279434b121AfE23C87951A0D3971267', image: PEAR, status: 0, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x1276134F11E1E677Eb9BFd67F7352Bb8Edd223a7', nft: '0x07d0ef66B0Fa944A06ca20680156DCbD9DcA0A6E', image: GT, status: 1, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0xF6619EA02ddc7Fc5436F75B1eF7f3981c2Ba6f50', nft: '0x75AFf25f4a9B8C8c0a387d14CEf29fA7d6EF6Ab9', image: CL, status: 0, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },

        { address: '0x9E0B65caB7E7650993617813650d7a31a2c92EB1', nft: '0xaDA57E3b55a6FC44796714E64A1BDDD4458Fe075', image: MDF, status: 1, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0xf4D938a4EC5589bEC8B00cCDbc8F5132AFc59bFE', nft: '0x47Ad630BdFc27dA090FaD41846a181f39882fbd9', image: SING, status: 0, fee: 1, feedecimal: 100, ape: 1, lp: 1, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x3b21F1A8288cff7503E0A5D8fE5252132Ed47Fa8', nft: '0x32271B6C330f0A8DC7b367B0488710F8C0B23642', image: OWL, status: 0, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56' },
        { address: '0xD92702F163b853443C4f30483FcBD8653F814440', nft: '0x175F6A6250d930DA156002d2f4115761C66cdCfE', image: BBQG, status: 0, fee: 1, feedecimal: 100, ape: 1, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0xcfD293177986C4b3726Fe235B138C018E05A3D60', nft: '0x0795Db8a9C71797f73a9876faa6cEC36239D9353', image: SQ, status: 0, fee: 1, feedecimal: 100, ape: 1, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x3867E3da4ea645102BC64Cc6e84C473B464EC10c', nft: '0x8A372C2765C2dA913adCDAA4A7E60EfF04718942', image: BK, status: 1, fee: 1, feedecimal: 100, ape: 1, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x13458cBa5f5E4de35543Ae0f8929a678b9229171', nft: '0x60f794549c0C0725041fF73B826B47d3E76f5777', image: NFB, status: 0, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0xCEC6B959f18C11181575493ADA084e51c58534eC', nft: '0x5350c6DA3e03a287d9657F469539b6B979f7b4A5', image: MCS, status: 0, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x7BdFbD8124cD45F6AAFeFdc689390411E980a01E', nft: '0x6DE0198e668eEc5fB9E14376a0A560371BfFc850', image: NFWolfPup, status: 1, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x776B37b5f3252EdF7a7D6145c7af2a818dCFFF9a', nft: '0xAB3f83a57FFe66a9B05577188F95911Ef17B97De', image: BabyNFT, status: 0, fee: 1, feedecimal: 100, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x97af550f4E875fC29979833Eac86FC5412Ed8758', nft: '0x645d1C47E7d1337A05878a143A4aDa9fcD5b1E8F', image: DMTNT, status: 0, fee: 1, feedecimal: 1, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0xe3A0F1AA816aF790154AdE6ed790A9D400b0794f', nft: '0xe6dd923ad331cbd9015f00baa3ec8633d3131548', image: AUTOSHARK, status: 0, fee: 1, feedecimal: 1, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x63a6c517cdBb674D42931cc716236249E3BCEd67', nft: '0x7d82F56ea0820A9d42b01C3C28F1997721732218', image: WIZARD, status: 0, fee: 0, feedecimal: 1, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x1ecA32d3EbA1F035a7e4e8607342112abFcF267a', nft: '0x6c7933040170ad060e2132346b4b406e146c63a9', image: ORDINARY, status: 0, fee: 0, feedecimal: 1, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0xdd19760840D1997F8325f218cC460E79c21660dc', nft: '0x89edc8cbC6a87d7bCF3f5Cf1A4468157fB2Eb950', image: RARE, status: 0, fee: 0, feedecimal: 1, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
        { address: '0x5d70a100cFBcF216f6ff9096E68FC89Ba0DB8C48', nft: '0x50Ee5cA83766d0aF92921A8cC07968c7974525e8', image: EPIC, status: 0, fee: 0, feedecimal: 1, ape: 0, lp: 0, pair: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' },
    ];

const Stake = () => {
    //   alert(STAKE_CONTRACT.length);
    let web3Provider = window.ethereum;
    const [tvl, setTVL] = useState(0);


    const getPrice = async (_token, ape) => {

        let _web3 = new Web3(web3Provider);
        const BNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; // BNB or another token
        const BUSD = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'; //BUSD


        let _tokenContract = new _web3.eth.Contract(TOKEN_ABI, _token);
        let stotalDecimals = await _tokenContract.methods.decimals().call();



        let SROUTER_ADDRESS = null;

        if (ape == 0) {
            SROUTER_ADDRESS = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
        }
        else if (ape == 1) {
            SROUTER_ADDRESS = '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7';

        }


        let _amountUSD = 1 * (10 ** 18);

        let _routerContractS = new _web3.eth.Contract(ROUTER_ABI, SROUTER_ADDRESS);

        let _resultUSDS = await _routerContractS.methods.getAmountsOut(_amountUSD + '', [BNB, BUSD]).call();
        let BNBUsdS = _resultUSDS[1] / (10 ** 18);




        let _stokenPrice = 0;


        let _amountS = 1 * (10 ** stotalDecimals);
        let _resultS = await _routerContractS.methods.getAmountsOut(_amountS + '', [_token, BNB]).call();
        _stokenPrice = _resultS[1] / (10 ** 18); // price of 1 CAKE in BUSD

        _stokenPrice = _stokenPrice * BNBUsdS;


        return _stokenPrice;

    }


    async function getTVL() {
        let tvl = 0
        let _web3 = new Web3(web3Provider);

        STAKE_CONTRACT.length > 0 && STAKE_CONTRACT.map(async (value, index) => {
            let _stakeContract = new _web3.eth.Contract(NFT_STAKE_ABI, value.address);
            let _staketoken = await _stakeContract.methods.staketoken().call();
            let _tokenContract = new _web3.eth.Contract(TOKEN_ABI, _staketoken);

            let sprice = await getPrice(_staketoken, 0);
            let _totalStaked = await _tokenContract.methods.balanceOf(value.address).call();
            let _decimals = await _tokenContract.methods.decimals().call();
            _totalStaked = parseFloat(_totalStaked / 1e1 ** _decimals).toFixed(2);
            tvl = tvl + parseFloat(sprice * _totalStaked);
            if (index == (STAKE_CONTRACT.length - 1)) {
                tvl = parseFloat(tvl).toFixed(2);
                setTVL(tvl);
            }

        })

    }


    useEffect(() => {
        $(document).ready(function () {
            $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
            $(".faq-question").on("click", function () {
                if ($(this).parent().hasClass("active")) {
                    $(this).next().slideUp();
                    $(this).parent().removeClass("active");
                }
                else {
                    $(".faq-answer").slideUp();
                    $(".faq-singular").removeClass("active");
                    $(this).parent().addClass("active");
                    $(this).next().slideDown();
                }
            });
        });
        $('.tabs3').on('click', 'a', function (e) {
            e.preventDefault();
            var tabId = $(this).attr('data-tab');
            $(this).closest('.tabs3').find('a').removeClass('active');
            $(this).addClass('active');
            $('.tab-panel').removeClass('active');
            $('#' + tabId).addClass('active');
        });


        if (window.ethereum) {
            web3Provider = window.ethereum;
        }
        else {
            web3Provider = new Web3.providers.HttpProvider(Config.RPC_URL)

        }
        getTVL();
    }, [])


    // console.log(STAKE_CONTRACT);



    return (


        <div className="bg-stake">

            <section className="main-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="mainwrp">
                                <div className="wrp-stake-head">
                                    <div className="stake-head">
                                        <h3>stake nft</h3>
                                    </div>
                                    <div  className="total-value"> <h4>
                                        <a href="#">Total Value Locked:</a> <span> ${tvl}</span>
                                    </h4>
                                    </div>
                                </div>
                                <div className="stake-p">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero <br></br>
                                        eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estemated. </p>
                                </div>
                                <div className="inactive-box mb-3">
                                    <ul class="tabs3 mb-3">
                                        <li class="tab-button"><a href="#" class="active" data-tab="active">Active</a></li>
                                        <li class="tab-button"><a href="#" class="" data-tab="inactive">Inactive</a></li>
                                    </ul>
                                    <h3>Earn NFT</h3>

                                </div>
                                <div class="tab-pane">
                                    <div class="tab-panel active" id="active">
                                        {STAKE_CONTRACT.length > 0 && STAKE_CONTRACT.map((value, index) => {
                                            if (value.status == 1) {
                                                return <StakeCard index={index} />
                                            }

                                        })
                                        }
                                    </div>
                                    <div class="tab-panel" id="inactive">
                                        {STAKE_CONTRACT.length > 0 && STAKE_CONTRACT.map((value, index) => {
                                            if (value.status == 0) {
                                                return <StakeCard index={index} />
                                            }

                                        })
                                        }
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );


}
export default Stake;
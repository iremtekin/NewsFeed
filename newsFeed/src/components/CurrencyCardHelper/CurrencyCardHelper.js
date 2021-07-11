import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
//import Grid from '@material-ui/core/Grid';
import logo from "assets/img/genelPara_lg.png"
import red_arrow from "assets/img/down_arrow_red.png"
import green_arrow from "assets/img/up_arrow_green.png"
import grey_arrow from "assets/img/empty.jpg"
import Box from '@material-ui/core/Box';

const CurrencyCardHelper = () => {

  const [currency, setCurrency] = useState([]);
  const [gold, setGold] = useState([]);

  useEffect(() => {
    fetch("https://api.genelpara.com/embed/doviz.json")
      .then((data) => data.json())
      .then((data) => setCurrency(data))
  },[]);

  useEffect(() => {
    fetch("https://api.genelpara.com/embed/altin.json")
      .then((data) => data.json())
      .then((data) => setGold(data))
  },[]);

  var USD_alis = "";
  var USD_satis = "";
  var USD_degisim = "";
  var EUR_alis = "";
  var EUR_satis = "";
  var EUR_degisim = "";
  var GBP_alis = "";
  var GBP_satis = "";
  var GBP_degisim = "";
  var GoldGA_alis = "";
  var GoldGA_satis = "";
  var GoldGA_degisim = "";
  var GoldC_alis = "";
  var GoldC_satis = "";
  var GoldC_degisim = "";
  var arrowUSD;
  var arrowEUR;
  var arrowGBP;
  var arrowGoldGA;
  var arrowGoldC;

  try {
    USD_alis = currency.USD.alis;
    USD_satis = currency.USD.satis;
    USD_degisim = currency.USD.degisim;
    const USD_degisim_int = parseFloat(USD_degisim.replace(",", "."));
    EUR_alis = currency.EUR.alis;
    EUR_satis = currency.EUR.satis;
    EUR_degisim = currency.EUR.degisim;
    const EUR_degisim_int = parseFloat(EUR_degisim.replace(",", "."));
    GBP_alis = currency.GBP.alis;
    GBP_satis = currency.GBP.satis;
    GBP_degisim = currency.GBP.degisim;
    const GBP_degisim_int = parseFloat(GBP_degisim.replace(",", "."));

    //Gold
    GoldGA_alis = gold.GA.alis;
    GoldGA_satis = gold.GA.satis;
    GoldGA_degisim = gold.GA.degisim;
    const GoldGA_degisim_float = parseFloat(GoldGA_degisim.replace(",", "."));
    GoldC_alis = gold.C.alis;
    GoldC_satis = gold.C.satis;
    GoldC_degisim= gold.C.degisim;
    const GoldC_degisim_float = parseFloat(GoldC_degisim.replace(",", "."));


    if(Math.sign(USD_degisim_int) > 0)
    {
      arrowUSD = green_arrow;
    }
    else if(Math.sign(USD_degisim_int) < 0)
    {
      arrowUSD = red_arrow;
    }
    else
    {
      arrowUSD = grey_arrow;
    }

    if(EUR_degisim_int > 0)
    {
      arrowEUR = green_arrow;
    }
    else if(Math.sign(EUR_degisim_int) < 0)
    {
      arrowEUR = red_arrow;
    }
    else
    {
      arrowEUR = grey_arrow;
    }

    if(GBP_degisim_int > 0)
    {
      arrowGBP = green_arrow;
    }
    else if(Math.sign(GBP_degisim_int) < 0)
    {
      arrowGBP = red_arrow;
    }
    else
    {
      arrowGBP = grey_arrow;
    }

    if(GoldGA_degisim_float > 0)
    {
      arrowGoldGA = green_arrow;
    }
    else if(Math.sign(GoldGA_degisim_float) < 0)
    {
      arrowGoldGA = red_arrow;
    }
    else
    {
      arrowGoldGA = grey_arrow;
    }

    if(GoldC_degisim_float > 0)
    {
      arrowGoldC = green_arrow;
    }
    else if(Math.sign(GoldC_degisim_float) < 0)
    {
      arrowGoldC = red_arrow;
    }
    else
    {
      arrowGoldC = grey_arrow;
    }

  } catch (error) {
    console.log(error)}


  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'left',
    },
    logo: {
      alignItems: 'right',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="row">
        <Box>
          <h4>USD</h4>
        </Box>
        <Box>
          <img style={{marginTop: 20, marginLeft: 23}} height={45} width={60} src={arrowUSD}/>
        </Box>
        <Box >
          <h6 style={{marginTop: 27, marginLeft: 23}} >alış: {USD_alis} | satış: {USD_satis} | % {USD_degisim} </h6>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box>
          <h4>EUR</h4>
        </Box>
        <Box>
          <img style={{marginTop: 20, marginLeft: 23}} height={45} width={60} src={arrowEUR}/>
        </Box>
        <Box >
          <h6 style={{marginTop: 27, marginLeft: 23}} >alış: {EUR_alis} | satış: {EUR_satis} | % {EUR_degisim} </h6>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box>
          <h4>Sterlin</h4>
        </Box>
        <Box>
          <img style={{marginTop: 20, marginLeft: 23}} height={45} width={60} src={arrowGBP}/>
        </Box>
        <Box >
          <h6 style={{marginTop: 27, marginLeft: 23}} >alış: {GBP_alis} | satış: {GBP_satis} | % {GBP_degisim} </h6>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box>
          <h4>Gram Altın</h4>
        </Box>
        <Box>
          <img style={{marginTop: 20, marginLeft: 23}} height={45} width={60} src={arrowGoldGA}/>
        </Box>
        <Box >
          <h6 style={{marginTop: 27, marginLeft: 23}} >alış: {GoldGA_alis} | satış: {GoldGA_satis} | % {GoldGA_degisim} </h6>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box>
          <h4>Çeyrek Altın</h4>
        </Box>
        <Box>
          <img style={{marginTop: 20, marginLeft: 23}} height={45} width={60} src={arrowGoldC}/>
        </Box>
        <Box >
          <h6 style={{marginTop: 27, marginLeft: 23}} >alış: {GoldC_alis} | satış: {GoldC_satis} | % {GoldC_degisim} </h6>
        </Box>
      </Box>
      <img height={45} width={60} src={logo}/>
    </div>
  );
};

export default CurrencyCardHelper;



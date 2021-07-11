import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import { CardActions, FormControl, InputLabel, Link, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import NewsCards from "../../components/NewsCards2/NewsCards2";
import logo from "assets/img/yaani_lg.png"

function NewsFeed() {

  const [category, setCategory] = useState("");


  function handleChangeSelect(value){
    setCategory(value)
  }

  return(
    <div align={"center"}>
      <GridContainer>
        <div align={"center"}>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <div>
                <img height={80} width={211} src={logo}/>
              </div>
                <FormControl>
                    <InputLabel>Kategoriler</InputLabel>
                  <Select
                    value={category}
                    onChange={event => handleChangeSelect(event.target.value)}
                  >
                    <MenuItem value={""}>Güncel</MenuItem>
                    <MenuItem value={"Turkiye"}>Türkiye</MenuItem>
                    <MenuItem value={"Dunya"}>Dünya</MenuItem>
                    <MenuItem value={"Ekonomi"}>Ekonomi</MenuItem>
                    <MenuItem value={"Spor"}>Spor</MenuItem>
                    <MenuItem value={"Saglik"}>Sağlık</MenuItem>
                    <MenuItem value={"Yasam"}>Yaşam</MenuItem>
                    <MenuItem value={"Teknoloji"}>Teknoloji</MenuItem>
                    <MenuItem value={"Magazin"}>Magazin</MenuItem>
                    <MenuItem value={"Futbol"}>Futbol</MenuItem>
                    <MenuItem value={"Galatasaray"}>Galatasaray</MenuItem>
                    <MenuItem value={"Besiktas"}>Beşiktaş</MenuItem>
                    <MenuItem value={"Fenerbahce"}>Fenerbahçe</MenuItem>
                    <MenuItem value={"Trabzonspor"}>Trabzonspor</MenuItem>
                  </Select>
                </FormControl>
              <CardActions>
                <div align={"center"}>
                  <GridItem xs={12} sm={12} md={6}>
                    <NewsCards category={category}/>
                    <Card>
                        <Link href={"https://www.yaani.com.tr/#q=haberler&v=haberler"} >
                          Tümünü Gör
                        </Link>
                    </Card>
                  </GridItem>
                </div>
              </CardActions>
            </Card>
          </GridItem>
        </div>
      </GridContainer>
    </div>
  );
}

export default NewsFeed;

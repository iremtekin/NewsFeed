import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
//import CardHeader from "../../components/Card/CardHeader";
import { CardActions } from "@material-ui/core";
import React from "react";
import NewsCards from "../../components/NewsCards2/NewsCards2";
import logo from "assets/img/yaani_lg.png"

function BlockedContents() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return(
    <div align={"center"}>
      <GridContainer>
        <div align={"center"}>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <div>
                <img height={80} width={211} src={logo}/>
              </div>
              <CardActions>
                <div align={"center"}>
                  <GridItem xs={12} sm={12} md={6}>
                    <NewsCards />
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

export default BlockedContents;

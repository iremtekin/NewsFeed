import React from "react";
import { Card, CardActions} from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import CurrencyCardHelper from "../CurrencyCardHelper/CurrencyCardHelper";

export default function CurrencyCard() {

  return (
    <div align={"center"}>
      <GridContainer>
        <div align={"center"}>
          <GridItem xs={12} sm={12} md={12}>
            <Card style={{marginTop:30}}>
              <CardActions>
                <div align={"center"}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Card>
                        <CardActions>
                          <GridItem xs={12} sm={12} md={12}>
                           <CurrencyCardHelper/>
                          </GridItem>
                        </CardActions>
                      </Card>
                    </GridItem>
                  </GridContainer>
                </div>
              </CardActions>
            </Card>
          </GridItem>
        </div>
      </GridContainer>
    </div>
  );
}




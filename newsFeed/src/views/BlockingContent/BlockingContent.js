import React from 'react';
import BlockIcon from '@material-ui/icons/Block';
import{
  CardActions,
} from '@material-ui/core';
import CardIcon from "../../components/Card/CardIcon";
import CardHeader from "../../components/Card/CardHeader";
import Card from "../../components/Card/Card";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import PostForm from "../../components/BlockingContentPost/BlockingContentPost";


export default function BlockingContent() {

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" stats>
              <CardIcon color="rose">
                <BlockIcon/>
              </CardIcon>
              <h3>Blocking Content</h3>
            </CardHeader>
            <CardActions>
              <GridItem xs={12} sm={12} md={12}>
              <PostForm />
              </GridItem>
            </CardActions>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}


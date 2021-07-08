import React, { useEffect, useState } from "react";
import {  QueryClient, QueryClientProvider } from 'react-query';
import {
  Card, CardActionArea,
  CardActions, CardContent, CardMedia, Link, Typography
} from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
//import Card from "../Card/Card";
//import CardHeader from "../Card/CardHeader";
//import CardBody from "../Card/CardBody";
const queryClient = new QueryClient();

//This is a data table component
//It fetches the data from given API

const NewsCardsHelp = () => {

  const [data, setTableData] = useState([])

  var data2 = {};

  var data3 = "";

  var titles = [];


  //fetches data once ([] is used so that it doesn't make endless calls to API)
 useEffect(() => {
    fetch("https://api.yaani.com.tr/engine/experts/web-search/cnzpxc/v1/cnews?Req=c366afbc-8dec-4fab-8308-d836f174def6&ApiKey=l0iy-8y7v-1tur&Lang=tr&Limit=10&Offset=0&cat=top&0yaani=true")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  },[]);


   try {
     data2 = data.advice.results
     console.log(data2.length)

     for(var i = 0; i < data2.length; i++)
     {
       console.log(titles[i]);
     }

     data2.map((row) => (data3 = row.displayUrl,
       console.log(data3)))
   } catch (error) {
     console.log(error)

   }

  for(var y = 0; y < data2.length;y++)
  {
    const cardImage = "https://api.yaani.com.tr/prx/" + data2[y].thumbnail
    titles.push(<Card style={{marginBottom: '30px'}}>
      <CardActionArea>
        <CardMedia>
          <div>
           <img height={160} width={230} src={cardImage}/>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data2[y].title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data2[y].summary}
          </Typography>
          <div>
            <Link href={data2[y].url} >
              Habere gitmek için tıklayın
            </Link>
          </div>
          <div>
            <p align={"left"}>{data2[y].displayUrl} | {data2[y].pubDate}</p>
          </div>
        </CardContent>
      </CardActionArea>
      </Card>)
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardActions>
              <GridItem xs={12} sm={12} md={12}>
                {titles}
              </GridItem>
            </CardActions>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default function NewsCards(){
  return(<QueryClientProvider client={queryClient}>
      <NewsCardsHelp />
    </QueryClientProvider>
  );

}

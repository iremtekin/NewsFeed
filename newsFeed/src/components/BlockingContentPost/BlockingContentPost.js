import React, { Component} from "react";
import axios from 'axios'
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Input from '@material-ui/core/Input';
import { Box, InputLabel, MenuItem, Select} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

//This component is a form that is used to blocking content
//It makes post calls to given API
//Uses axios

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      descriptionContains: false,
      person: '',
      reason: '',
      text: '',
      isText:'',
      isDisabled: true,
      titleContains: false,
      url: '',
      id: ''
    }

    this.handleChangeCheckBox2 = this.handleChangeCheckBox2.bind(this);
    this.handleChangeCheckBox1 = this.handleChangeCheckBox1.bind(this);
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {

    //Copy the state into a new object and pass that object to axios
    //reason is there are some state attributes that are not necessary when calling api
    let { content, person, reason, url, titleContains,descriptionContains,text} = this.state

    if(text === false && url === true)
    {
      titleContains = false;
      descriptionContains = false;
    }

    const myObject = {
      content: content,
      descriptionContains: descriptionContains,
      person: person,
      reason: reason,
      text: text,
      titleContains: titleContains,
      url: url,
      id: content
    }

    e.preventDefault()
    console.log(myObject)
    axios
      .post('http://localhost:3000/blockingContent', myObject)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  //Changes the value of select box and assign text and url accordingly
  handleChangeSelect(value) {
    if(value === "text")
    {
       this.setState({ text: true });
       this.setState({ url: false });
       this.setState({ isText: value });
       this.setState({isDisabled: false});
    }
    else if(value === "url")
    {
      this.setState({ url: true });
      this.setState({ text: false });
      this.setState({ isText: value });
      this.setState({isDisabled: true});
    }
  }

  handleChangeCheckBox1(ev)
  {
    this.setState({ descriptionContains:  ev.target.checked});
    console.log(this.state.descriptionContains);
  }

  handleChangeCheckBox2(ev)
  {
    this.setState({ titleContains:  ev.target.checked});
    console.log(this.state.titleContains);
  }

  render() {

    return (
      <div>
        <Box>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <form onSubmit={this.submitHandler}>
                <div>
                  <Box marginBottom={3} marginTop={2}>
                    <FormControl fullWidth>
                      <InputLabel>User</InputLabel>
                      <Input aria-describedby="my-helper-text"
                             type="text"
                             name="person"
                             value={this.state.person}
                             onChange={this.changeHandler}
                      />
                      <FormHelperText id="my-helper-text">Enter your name.</FormHelperText>
                    </FormControl>
                  </Box>
                </div>
                <div>
                  <Box marginBottom={3}>
                    <FormControl fullWidth>
                      <InputLabel>Content</InputLabel>
                      <Input aria-describedby="my-helper-text"
                             type="text"
                             name="content"
                             value={this.state.content}
                             onChange={this.changeHandler}
                      />
                      <FormHelperText id="my-helper-text">Enter a word, sentence or url that will be blocked.</FormHelperText>
                    </FormControl>
                  </Box>
                </div>
                <div>
                  <FormControl fullWidth>
                    <InputLabel>
                      Filter Type
                    </InputLabel>
                  <Select onChange={event => this.handleChangeSelect(event.target.value)} value={this.state.isText}>
                    <MenuItem value={"text"}>Text</MenuItem>
                    <MenuItem value={"url"}>Url</MenuItem>
                  </Select>
                  </FormControl>
                </div>
                <div>
                  <Box marginTop={5}>
                  <FormControl >
                    <FormLabel component="legend">Filtering Area</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox disabled={this.state.isDisabled} value={this.state.descriptionContains}  onChange={this.handleChangeCheckBox1} name="description" />
                        }
                        label="description"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox disabled={this.state.isDisabled} value={this.state.titleContains} onChange={this.handleChangeCheckBox2}  name="title" />
                        }
                        label="title"
                      />
                    </FormGroup>
                  </FormControl>
                  </Box>
                </div>
                <div>
                  <Box marginTop={2.5} marginBottom={3}>
                    <FormControl fullWidth>
                      <InputLabel>Reason</InputLabel>
                      <Input aria-describedby="my-helper-text"
                             type="text"
                             name="reason"
                             value={this.state.reason}
                             onChange={this.changeHandler}
                      />
                      <FormHelperText id="my-helper-text">Enter your reason for blocking this content.</FormHelperText>
                    </FormControl>
                  </Box>
                </div>
                <div align={"center"}>
                  <Button type="submit" variant="outlined" and color="primary">Submit</Button>
                </div>
              </form>
            </GridItem>
          </GridContainer>
      </Box>
      </div>
    )
  }
}

export default PostForm


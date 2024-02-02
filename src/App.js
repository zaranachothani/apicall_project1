// import logo from './logo.svg';
import './App.css';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import info1 from './image/info1.svg';
import info2 from './image/info2.svg';
import logo from './image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaHeart, FaCircle } from "react-icons/fa";
import { PiBracketsAngleBold } from "react-icons/pi";

function App() {

  const [data,setdata] = useState([]);
  const [status,setstatus] = useState([]);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
  .then(function (response) {
    console.log(response.data.results);
    setdata(response.data.results);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  },[])

  return (
    <div className="App">

        <header>
          <Container>
            <div className='header'>
              <div className='header_logo'>
                <img src={logo}></img>
              </div>
              <ul className='Main_menu'>
                <li>Docs</li>
                <li>About</li>
                    <a href='#' className='theme_btn'> Support Us</a>
                </ul>
              </div>
              <Row>
                <Col><h1 className='heading'>The Rick and Morty API</h1></Col>
              </Row>
            </Container>
          </header>

        <div className=''>
          <div className='bgcolor'>
            <Container className='spacer'>
              <div className='card_parent'>
              {
                data.map((ele,ind)=>{

                  // let dotColor = 'rgb(142,150,157)';
                  // if (ele.status === 'Alive') {
                  //   dotColor = 'rgb(85, 204, 68)';
                  // } else if (ele.status === 'Dead') {
                  //   dotColor = 'red';
                  // }

                  return(
                    <>
                      <div className='cards'>
                        <div className='card_item'>
                            <div className='card_img'>
                                <img src={ele.image}></img>
                            </div>
                            <div className='card_info'>
                                <div className='top_info'>
                                     <h5><a>{ele.name}</a></h5>
                                     <h4 className='status'><p><FaCircle className='circle' style={{ color: ele.status === "Alive" ? 'rgb(85, 204, 68)' : (ele.status === "unknown" ? 'rgb(142,150,157)' : 'red') }}></FaCircle>{ele.status} - {ele.species}</p></h4>
                                </div>
                                <div className='middle_info'>
                                     <h5>Last known location:</h5>
                                    <h4 className='location'><a>{ele.location.name}</a></h4>
                                </div>
                                <div className='bottom_info'>
                                     <h5>First seen in:</h5>
                                    <h4 className='status'><a>{ele.origin.name}</a></h4>
                                </div>
                            </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
              </div>
              </Container>
            </div>
          </div>

            <footer>
                <div className='bggray'>
                  <center className='spacer'>
                      <div className='footer_info'>
                        <ul className='footer_menu'>
                          <li>
                            <a href='#'>CHARACTERS: 826</a>
                          </li>
                          <li>
                            <a href='#'>CHARACTERS: 826</a>
                          </li>
                          <li>
                            <a href='#'>CHARACTERS: 826</a>
                          </li>
                        </ul>
                        <div className='footer_status'>
                          <h4>SERVER STATUS</h4><div className='status_icon'></div>
                        </div>
                        <div className='cmp_info'>
                          <a>
                            <img src={info2}></img>
                          </a>
                          <a>
                            <img src={info1}></img>
                          </a>
                        </div>
                        <ul className='footer_icons'>
                          <li>
                            <a href='#'><i><FaGithub></FaGithub></i></a>
                          </li>
                          <li>
                            <a href='#'><i><FaTwitter></FaTwitter></i></a>
                          </li>
                          <li>
                            <a href='#'><i><FaHeart ></FaHeart></i></a>
                          </li>
                        </ul>
                        <div className='footer_last'>
                          <span><i><PiBracketsAngleBold></PiBracketsAngleBold></i> by</span> <a href='#'>Axcel Fuhemann</a> <span>2024</span>
                        </div>
                      </div>
                  </center>
                </div>
            </footer>

    </div>
  );
}

export default App;

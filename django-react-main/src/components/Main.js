/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React from 'react';
 import { StyleSheet, css } from 'aphrodite/no-important';
 import { Component } from 'react-image-crop';
 import axios from "axios";

 export default class Mainp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      get_back:[],
    }
  }
  GetPageSources() {
    if (this.state.get_back.length==0){
    axios
    .get("http://localhost:8000/api/main/")
    .then(res => this.setState({get_back: res.data}))
    .catch(err => console.log(err));
  }}
  renderPageDescription(){
    this.GetPageSources();
    const newItems = this.state.get_back;
    return newItems.map(item => (
      <pre className={css(section1Styles.hero_title21)}>
      {
      item.description
      }
    </pre>
    ));
  }
  renderPageImage(){
    this.GetPageSources();
    const newItems = this.state.get_back;
    return newItems.map(item => (
      <div
      style={{background: `url(${item.img})`, backgroundRepeat: "no-repeat",backgroundSize: "cover", filter: "brightness(25%)"}}
      className={css(section1Styles.block5, section1Styles.block5_layout)}>
    </div>
    ));
  }
  render() {
    console.log(this.state.get_back)
   return (
     <section className={css(section1Styles.section1, section1Styles.section1_layout)}>
       <div className={css(section1Styles.block1, section1Styles.block1_layout)}>
         <img
           src="5bc022d18df909032f8453f0fa6cc2f6.png"
           alt=""
           className={css(section1Styles.image58, section1Styles.image58_layout)}
         />
       </div>
 
       <div className={css(section1Styles.flex, section1Styles.flex_layout)} 
       style={{display: 'flex', justifyContent: 'center'}}>
         <div onClick={() => window.open('Main', '_parent')} className={css(section1Styles.block4, section1Styles.block4_layout)}>
           <h1 className={css(section1Styles.hero_title, section1Styles.hero_title_layout)}>{'Студентам'}</h1>
         </div>
 
         <div onClick={() => window.open('Main', '_parent')} className={css(section1Styles.block2, section1Styles.block3_layout)}>
           <h1 className={css(section1Styles.hero_title1, section1Styles.hero_title1_layout)}>{'СНО'}</h1>
         </div>
 
         <div onClick={() => window.open('Main', '_parent')} className={css(section1Styles.block3, section1Styles.block3_layout)}>
           <h1 className={css(section1Styles.hero_title2, section1Styles.hero_title2_layout)}>{'Предприятиям'}</h1>
         </div> 
       </div>
    <div> {this.renderPageImage()}
      <div className={css(section1Styles.flex1, section1Styles.flex1_layout)}>
        <h1 className={css(section1Styles.hero_title11_box, section1Styles.hero_title11_box_layout)}>
          <div className={css(section1Styles.hero_title11)}>
            <span className={css(section1Styles.hero_title11_span0)}>{'ПРОФ'}</span>
            <span className={css(section1Styles.hero_title11_span1)}>{'КАМПУС'}</span>
          </div>
        </h1>
        <div className={css(section1Styles.hero_title21_box, section1Styles.hero_title21_box_layout)}>
        {this.renderPageDescription()}
        </div>
      </div>
      </div>
     </section>
   );
 }}
 
 
 Mainp.inStorybook = true;
 
 const section1Styles = StyleSheet.create({
   section1_layout: {
     position: 'relative',
     height: 446,
     width: 1440,
     minWidth: 1440,
     margin: '960px 0px 0px'
   },
   section1: {
     display: 'flex',
     flexDirection: 'column'
   },
   block1: {
     display: 'flex',
     flexDirection: 'column'
   },
   block1_layout: {
     position: 'absolute',
     top: -245.2,
     height: 586,
     left: -25,
     width: 1490
   },
   image58: {
     width: '100%',
     height: 'auto',
     verticalAlign: 'top',
     objectFit: 'contain',
     objectPosition: 'center top',
     opacity: .7
   },
   image58_layout: {
     position: 'relative'
   },
   flex: {
     display: 'flex',
     flexDirection: 'column'
   },
   flex_layout: {
     position: 'absolute',
     top: -470.8,
     height: 709,
     left: 448,
     width: 544
   },
   block4: {
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: 'rgb(15,127,204)',
     borderRadius: '50px 50px 50px 50px',
     cursor: 'pointer'
   },
   block4_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '309px 2px 0px'
   },
   hero_title: {
     display: 'flex',
     justifyContent: 'flex-end',
     font: '700 64px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(255,255,255)',
     textAlign: 'right',
     letterSpacing: '0px'
   },
   hero_title_layout: {
     position: 'relative',
     height: 'min-content',
     width: '64.07%',
     margin: '12px auto 13px'
   },
   block2: {
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: 'rgb(253,106,7)',
     borderRadius: '50px 50px 50px 50px',
     cursor: 'pointer'
   },
   block2_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '50px 2px 0px'
   },
   hero_title1: {
     font: '700 64px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(255,255,255)',
     letterSpacing: '0px'
   },
   hero_title1_layout: {
     position: 'relative',
     height: 'min-content',
     width: '25.93%',
     margin: '15px auto 3px'
   },
   block3: {
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: 'rgb(0,0,0)',
     borderRadius: '50px 50px 50px 50px',
     cursor: 'pointer'
   },
   block3_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '50px 0px 0px 4px'
   },
   hero_title2: {
     font: '700 64px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(255,255,255)',
     letterSpacing: '0px'
   },
   hero_title2_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '12px 33px 13px'
   },
   block5: {
     display: 'flex',
     flexDirection: 'column',
     filter: 'drop-shadow(0px 12px 31px rgba(0,0,0,0.24705882352941178))',
   },
   block5_layout: {
     position: "relative",
     top: -988.8,
     height: 733,
     left: -111,
     width: 1618
   },
   flex1: {
     display: 'flex',
     flexDirection: 'column'
   },
   flex1_layout: {
     position: 'absolute',
     top: -658.8,
     left: "50%",
     marginright: "-50%",
     transform: "translate(-50%, -50%)",
     width: '73.55%',
    //  margin: '90px auto',
   },
   hero_title11: {
     font: '700 96px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(0,0,0)',
     textAlign: 'right',
     letterSpacing: '0px'
   },
   hero_title11_box: {
     display: 'flex',
     justifyContent: 'flex-end'
   },
   hero_title11_box_layout: {
     position: 'relative',
     height: 'min-content',
     width: '52.1%',
     margin: '0px auto'
   },
   hero_title11_span0: {
     font: '700 1em/1.2 "Raleway", Helvetica, Arial, serif',
     color: '#0f7fccff',
     letterSpacing: '0px',
     marginLeft:"10%"
   },
   hero_title11_span1: {
     font: '1em/1.2 "Open Sans", Helvetica, Arial, serif',
     color: '#fd6a07ff',
     letterSpacing: '0px',
     textAlign:"center"
   },
   hero_title21: {
     overflow: 'visible',
     marginTop: 0,
     marginBottom: 0,
     margin: 0,
     font: '40px/1.2 "Open Sans", Helvetica, Arial, serif',
     color: 'rgb(255,255,255)',
     textAlign: 'justify',
     letterSpacing: '0px',
     whiteSpace: 'pre-wrap'
   },
   hero_title21_box: {
     display: 'flex',
     justifyContent: 'center'
   },
   hero_title21_box_layout: {
     position: 'relative',
     height: 'min-content',
     width: "100%",
     marginTop:"5%"
   }
 });
 
 const styles = StyleSheet.create({
   main: {
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: 'rgb(255,255,255)'
   },
   main_layout: {
     position: 'relative',
     overflow: 'hidden'
   }
 });
 
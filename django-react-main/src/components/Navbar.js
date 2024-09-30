/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React, { Component} from 'react';
 import { StyleSheet, css } from 'aphrodite/no-important';
 import Login from "./Login";
 

 class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  modal: false
		}
		};

	toggle = () => {
		this.setState({ modal: !this.state.modal });
	  };
	  
render(){
   return (
	 <section className={css(section1Styles.section1, section1Styles.section1_layout)}>
	   <div className={css(section1Styles.block5, section1Styles.block5_layout)}>
		 <div className={css(section1Styles.flex, section1Styles.flex_layout)}>
		   <div className={css(section1Styles.flex1, section1Styles.flex1_layout)}>
			 <div className={css(section1Styles.flex1_item)}>
			   <div
				 onClick={() => window.open('Main', '_parent')}
				 className={css(section1Styles.group, section1Styles.group_layout)}>
				 <img
				   src='31a36120d5661663f20ce626c65a9674.png'
				   alt=""
				   className={css(section1Styles.image2, section1Styles.image2_layout)}
				 />
			   </div>
			 </div>
			 <div className={css(section1Styles.flex1_spacer)} />
			 <div className={css(section1Styles.flex1_item1)}>
			   <div className={css(section1Styles.flex2, section1Styles.flex2_layout)}>
				 <h5 className={css(section1Styles.highlights1, section1Styles.highlights1_layout)}>
				   <a style={{ color: 'rgb(0,0,0)' }} href="Main" target="_parent">
					 {'Главная'}
				   </a>
				 </h5>
			   </div>
			 </div>
			 <div className={css(section1Styles.flex1_spacer1)} />
			 <div className={css(section1Styles.flex1_item2)}>
			   <div className={css(section1Styles.flex3, section1Styles.flex3_layout)}>
				 <h5 className={css(section1Styles.highlights1, section1Styles.highlights1_layout1)}>
				   <a style={{ color: 'rgb(0,0,0)' }} href="SNO" target="_parent">
					 {'СНО'}
				   </a>
				 </h5>
			   </div>
			 </div>
			 <div className={css(section1Styles.flex1_spacer2)} />
			 <div className={css(section1Styles.flex1_item3)}>
			   <div className={css(section1Styles.flex4, section1Styles.flex4_layout)}>
				 <h5 className={css(section1Styles.highlights1, section1Styles.highlights1_layout2)}>
				   <a style={{ color: 'rgb(0,0,0)' }} href="Catalog" target="_parent">
					 {'Студенты'}
				   </a>
				 </h5>
			   </div>
			 </div>
			 <div className={css(section1Styles.flex1_spacer2)} />
			 <div className={css(section1Styles.flex1_item3)}>
			   <div className={css(section1Styles.flex4, section1Styles.flex4_layout)}>
				 <h5 className={css(section1Styles.highlights1, section1Styles.highlights1_layout2)}>
				   <a style={{ color: 'rgb(0,0,0)' }} href="business" target="_parent">
					 {'Кейсы'}
				   </a>
				 </h5>
			   </div>
			 </div>
			 <div className={css(section1Styles.flex1_spacer3)} />
			 <div className={css(section1Styles.flex1_item4)}>
			   <div className={css(section1Styles.flex5, section1Styles.flex5_layout)}>
				 <h5 className={css(section1Styles.highlights1, section1Styles.highlights1_layout2)}>
				   <a style={{ color: 'rgb(0,0,0)' }} href="news" target="_parent">
					 {'Новости'}
				   </a>
				 </h5>
			   </div>
			 </div>
			 <div className={css(section1Styles.flex1_spacer4)} />
			 <div className={css(section1Styles.flex1_item5)}>
			   <div
				onClick={() => {this.toggle();}}
				 className={css(section1Styles.block6, section1Styles.block6_layout)}>
				 <h2 className={css(section1Styles.medium_title, section1Styles.medium_title_layout)}>
				   {'АВТОРИЗАЦИЯ'}
				 </h2>
			   </div>
			 </div>
		   </div>
 
		   <h5 className={css(section1Styles.highlights_box, section1Styles.highlights_box_layout)}>
			 <a style={{ color: 'rgb(0,0,0)' }}>
			   <div className={css(section1Styles.highlights)}>
				 <span className={css(section1Styles.highlights_span0)}>{'ПРОФ'}</span>
				 <span className={css(section1Styles.highlights_span1)}>{'КАМПУС'}</span>
			   </div>
			 </a>
		   </h5>
		   {this.state.modal ? (
          <Login
            toggle={this.toggle}
          />
        ) : (null)}
		 </div>
	   </div>
	 </section>
   );
 }}
 
 export default Header
 
 Header.inStorybook = true;
 
 const section1Styles = StyleSheet.create({
   section1_layout: {
	 position: 'relative',
	 height: 'min-content'
   },
   section1: {
	 display: 'flex',
	 flexDirection: 'column'
   },
   block5: {
	 display: 'flex',
	 flexDirection: 'column',
	 backgroundColor: 'rgb(255,255,255)',
	 boxShadow: '0px 12px 18px 0px rgba(0,0,0,0.3588235294117647)',
	 marginBottom: 30
   },
   block5_layout: {
	 position: 'relative',
	 height: 'min-content'
   },
   flex: {
	 display: 'flex',
	 flexDirection: 'column'
   },
   flex_layout: {
	 position: 'relative',
	 height: 'min-content',
	 width: '77.08%',
	 margin: '9px auto'
   },
   flex1: {
	 display: 'flex'
   },
   flex1_layout: {
	 position: 'relative',
	 height: 66,
	 width: 1107,
	 minWidth: 1107,
	 margin: '6px 0px 0px 3px'
   },
   flex1_item: {
	 display: 'flex',
	 flexDirection: 'column',
	 position: 'relative',
	 flex: '0 1 87px'
   },
   group: {
	 display: 'flex',
	 flexDirection: 'column',
	 cursor: 'pointer'
   },
   group_layout: {
	 position: 'relative',
	 height: 'min-content'
   },
   image2: {
	 width: '100%',
	 height: 'auto',
	 verticalAlign: 'top',
	 objectFit: 'contain',
	 objectPosition: 'center top'
   },
   image2_layout: {
	 position: 'relative',
	 width: 87,
	 minWidth: 87
   },
   flex1_spacer: {
	 flex: '0 1 289px'
   },
   flex1_item1: {
	 display: 'flex',
	 flexDirection: 'column',
	 position: 'relative',
	 flex: '0 1 70px'
   },
   flex2: {
	 display: 'flex',
	 flexDirection: 'column'
   },
   flex2_layout: {
	 position: 'relative',
	 height: 'min-content',
	 margin: '27px 0px 10px'
   },
   highlights1: {
	 font: '300 17px/1.2 "Open Sans", Helvetica, Arial, serif',
	 color: 'rgb(0,0,0)',
	 letterSpacing: '0px',
	 cursor: 'pointer'
   },
   highlights1_layout: {
	 position: 'relative'
   },
   flex1_spacer1: {
	 flex: '0 1 40px'
   },
   flex1_item2: {
	 display: 'flex',
	 flexDirection: 'column',
	 position: 'relative',
	 flex: '0 1 41px'
   },
   flex3: {
	 display: 'flex',
	 flexDirection: 'column'
   },
   flex3_layout: {
	 position: 'relative',
	 height: 'min-content',
	 margin: '27px 0px 11px'
   },
   highlights1_layout1: {
	 position: 'relative',
	 height: 'min-content'
   },
   flex1_spacer2: {
	 flex: '0 1 34px'
   },
   flex1_item3: {
	 display: 'flex',
	 flexDirection: 'column',
	 position: 'relative',
	 flex: '0 1 80px'
   },
   flex4: {
	 display: 'flex',
	 flexDirection: 'column'
   },
   flex4_layout: {
	 position: 'relative',
	 height: 'min-content',
	 margin: '27px 0px 11px'
   },
   highlights1_layout2: {
	 position: 'relative',
	 height: 'min-content'
   },
   flex1_spacer3: {
	 flex: '0 1 37px'
   },
   flex1_item4: {
	 display: 'flex',
	 flexDirection: 'column',
	 position: 'relative',
	 flex: '0 1 112px'
   },
   flex5: {
	 display: 'flex',
	 flexDirection: 'column'
   },
   flex5_layout: {
	 position: 'relative',
	 height: 'min-content',
	 margin: '27px 0px 11px'
   },
   highlights1_layout3: {
	 position: 'relative',
	 height: 'min-content'
   },
   flex1_spacer4: {
	 flex: '0 1 62px'
   },
   flex1_item5: {
	 display: 'flex',
	 flexDirection: 'column',
	 position: 'relative',
	 flex: '0 1 255px'
   },
   block6: {
	 display: 'flex',
	 flexDirection: 'column',
	 backgroundColor: 'rgb(15,127,204)',
	 borderRadius: '25px 25px 25px 25px',
	 cursor: 'pointer'
   },
   block6_layout: {
	 position: 'relative',
	 height: 'min-content',
	 margin: '15px 0px 1px'
   },
   medium_title: {
	 font: '700 27px/1.2 "Raleway", Helvetica, Arial, serif',
	 color: 'rgb(255,255,255)',
	 letterSpacing: '0px'
   },
   medium_title_layout: {
	 position: 'relative',
	 height: 'min-content',
	 margin: '9px 19px 8px 25px'
   },
   highlights: {
	 font: '600 15.600000381469727px/1.2 "Raleway", Helvetica, Arial, serif',
	 color: 'rgb(0,0,0)',
	 letterSpacing: '0px'
   },
   highlights_box: {
	 cursor: 'pointer'
   },
   highlights_box_layout: {
	 position: 'relative',
	 height: 'min-content',
	 margin: '1px 4px 0px'
   },
   highlights_span0: {
	 font: '600 1em/1.2 "Raleway", Helvetica, Arial, serif',
	 color: '#0f7fccff',
	 letterSpacing: '0px'
   },
   highlights_span1: {
	 font: '300 1em/1.2 "Open Sans", Helvetica, Arial, serif',
	 color: '#fd6a07ff',
	 letterSpacing: '0px'
   }
 });
 
 
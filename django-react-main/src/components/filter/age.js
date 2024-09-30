/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React, { PureComponent } from 'react';
 import { StyleSheet, css } from 'aphrodite/no-important';
 
 export default class Age extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    }
    this.state = {
      exp1: false,
      exp2: false,
      result: "",
      result2: "",
   }
  }; 

 change_exp1(){
  this.setState(previousState => {
    return {
      exp1: previousState.exp1=!previousState.exp1
    }
  })
  this.state.exp1?(this.setState({result:""})) : (this.setState({result:"False,"}));
  this.handlExpChange()
 }
 change_exp2(){
  this.setState(previousState => {
    return {
      exp2: previousState.exp2=!previousState.exp2
    }
  })
  this.state.exp2?(this.setState({result2:""})) : (this.setState({result2:"True,"}));
  this.handlExpChange()
}
handlExpChange = () => {
  var inp = this.state.result + this.state.result2
  this.props.OnSelectOn3(inp);
}
componentDidUpdate(){
  this.handlExpChange()
}
  render(){
   return (
     <div className={`exp ${css(styles.group, styles.group_layout)}`}>
       <px-posize track-style='{"flexGrow":1}' x="0px minmax(500px,500px) 0px" y="0px minmax(287px,287px) 0px">
         <div className={css(styles.flex)}>
          
           {
                    this.state.exp1?(
                      <div className={css(styles.txt_selected, styles.txt1_layout)}onClick={this.change_exp1.bind(this)}>{'младше 18'}</div>
                ) : (
                  <div className={css(styles.txt1, styles.txt1_layout)}onClick={this.change_exp1.bind(this)}>{'младше 18'}</div>)
            }

           <hr className={css(styles.rect, styles.rect_layout1)} />
           {
                    this.state.exp2?(
                      <div className={css(styles.txt_selected, styles.txt5_layout)}onClick={this.change_exp2.bind(this)}>{'старше 18'}</div>
                ) : (
                  <div className={css(styles.txt1, styles.txt5_layout)}onClick={this.change_exp2.bind(this)}>{'старше 18'}</div>)
            }
         </div>
       </px-posize>
     </div>
   );
 }}
 
 Age.inStorybook = true;
 
 const styles = StyleSheet.create({
   group: {
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: 'rgb(255,255,255)'
   },
   group_layout: {
     position: 'relative',
     minHeight: 87,
     flexShrink: 0
   },
   flex: {
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: 'rgb(255,255,255)',
     boxShadow: '0px 12px 21px 7px rgba(0,0,0,0.24705882352941178)',
     border: '2px solid rgb(146,143,143)',
     borderRadius: '0px 0px 30px 30px',
     width: '100%',
     height: '100%',
   },
   group1: {
     display: 'flex',
     flexDirection: 'column'
   },
   group1_layout: {
     position: 'relative',
     height: 'min-content'
   },
   rect: {
     backgroundColor: 'rgb(146,143,143)'
   },
   rect_layout: {
     position: 'absolute',
     top: 0,
     height: 2,
     left: 1,
     right: 0,
     margin: '61px 0px 0px'
   },
   group2: {
     display: 'flex',
     flexDirection: 'column',
     borderRadius: '30px 30px 30px 30px'
   },
   group2_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '2px 0px 1px'
   },
   flex1: {
     display: 'flex'
   },
   flex1_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '9px 13px'
   },
   txt: {
     font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(253,106,7)',
     letterSpacing: '0px',
   },
   txt_selected: {
    font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
    color: "rgb(253, 106, 7)",
    letterSpacing: '0px',
  },
   txt_layout: {
     position: 'relative',
     flex: '0 0 auto',
     height: 'min-content',
     margin: '10px 0px 9px 14px'
   },
   flex1_spacer: {
     flex: '0 1 289px'
   },
   flex1_item: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
     flex: '0 1 42px'
   },
   img: {
     background: 'var(--src) center center / contain no-repeat'
   },
   img_layout: {
     position: 'relative',
     height: 42,
     width: 42,
     minWidth: 42
   },
   txt1: {
     font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(145,143,143)',
     letterSpacing: '0px'
   },
   txt1_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '10px 27px 0px',
     cursor:"pointer"
   },
   rect_layout1: {
     position: 'relative',
     height: 2,
     margin: '10px 0px 0px 1px'
   },
   txt2: {
     font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(145,143,143)',
     letterSpacing: '0px'
   },
   txt2_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '10px 27px 0px'
   },
   rect_layout2: {
     position: 'relative',
     height: 2,
     margin: '10px 0px 0px 1px'
   },
   txt3: {
     font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(145,143,143)',
     letterSpacing: '0px'
   },
   txt3_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '10px 27px 0px'
   },
   rect_layout3: {
     position: 'relative',
     height: 2,
     margin: '10px 0px 0px 1px'
   },
   txt4: {
     font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(145,143,143)',
     letterSpacing: '0px'
   },
   txt4_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '10px 27px 0px'
   },
   rect_layout4: {
     position: 'relative',
     height: 2,
     margin: '10px 0px 0px 1px'
   },
   txt5: {
     font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(145,143,143)',
     letterSpacing: '0px'
   },
   txt5_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '10px 27px 11px',
     cursor:"pointer"
   }
 });
 
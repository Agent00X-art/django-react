import React, { Component, useState} from 'react';
import { connect } from 'react-redux';
import {addToCart, removeFromCart} from "../store/actions/cartActions";
import { StyleSheet, css } from 'aphrodite/no-important';
import axios from "axios";
import Filter from "./Filter1";

var v = 0;
class Students extends Component{
constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      backurl: "Без опыта,3-6 мес,Полгода,1 год,Более года,;IT и цифровые технологии,Медицинские технологии,Химические технологии,Биотехнологии,Ресурсосберегающая энергетика,Образовательные технологии,Экономика,Интелектуальные технологии,Дизайн;True,False;женский,мужской,",
    }
    };
  refreshList = () => {
    if ((this.state.todoList.length==0) && (v==0)){
    axios
    .patch("http://localhost:8000/object/sorting",
    {
      sort_by:"exp speciality adult sex",
      key:this.state.backurl
    })
    .then(res => this.setState(previousState => {
      return {
      todoList: previousState.todoList= res.data }}))
    .catch(err => console.log(err));
}
if (this.state.todoList.length==0){
console.log('error', v)
v = 404
}
else{
v=0
}
}

handleBack = (BackValue) => {
    this.setState({
      todoList:[]
  })
    this.setState({backurl: BackValue})
  v = 0
  }


addToCart = (e) => {

    e.preventDefault();

    this.props.addToCart(this.props.product)

    this.setState({
      inCart: true
  })

}
Delete = (e) => {

    e.preventDefault();

    this.setState({
      inCart: false
  })

}
toggle = () => {
  this.setState({ modal: !this.state.modal });
};

  renderItems = () => {
    this.refreshList()
    const newItems = this.state.todoList;
    if (v==404){
      return (
      <div style={{marginLeft: "auto", marginRight:"auto", font: '40px/1.2 "Open Sans", Helvetica, Arial, serif', marginBottom: "40px"}}>
     нет результатов
      </div>
      )
    }
    else{
    return newItems.map(item => (

        <px-posize
        alt-class={`card ${css(styles.block)}`}
        track-style='{"overflow":"auto"}'
        area-style='{"overflow":"hidden"}'
        x="0px minmax(320px,320px) 0px"
        y="0px minmax(568px,568px) 0px">
        <div className={css(styles.block)}>
          
          <div className={css(styles.flex, styles.flex_layout)}>
          <img
          // src="backstudent.png"
          style={{objectFit: "cover"}}
          // className={css(styles.image_back, styles.image_back_layout)}
        />
            <div className={css(styles.group, styles.group_layout)}>
              <img
                src={item.image}
                style={{objectFit: "cover"}}
                className={css(styles.image, styles.image_layout2)}
              />
                  <img
                src="frame.png"
                className={css(styles.image, styles.image_layout)}
              />
              {
                      <img 
                      src="like.png"
                      className={css(styles.icon, styles.icon_layout)}
                      onClick={this.Delete}
                    />
            }
            <div className={css(styles.block1, styles.block1_layout)} />
          </div>
          <div className={css(styles.cover_block, styles.cover_block_layout)}>
            <h3 className={css(styles.subtitle, styles.subtitle_layout)}>{"Опыт работы: "}</h3>
            <h3 className={css(styles.subtitle3, styles.subtitle3_layout)}>{item.exp}</h3>
          </div>
  
          <div className={css(styles.cover_block1, styles.cover_block1_layout)}>
            <h3 className={css(styles.subtitle1, styles.subtitle1_layout)}>{item.speciality}</h3>
          </div>
  
          <div className={css(styles.cover_block2, styles.cover_block2_layout)} onClick={() => window.open(item.git)}>
            <h3 className={css(styles.subtitle2, styles.subtitle2_layout)}>{'Галерея работ'}</h3>
          </div>
  
          <div className={css(styles.small_text_body_box, styles.small_text_body_box_layout)}>
            <div className={css(styles.small_text_body)}>
              <span className={css(styles.small_text_body_span0)}>{'СНО: '}</span>
              <span className={css(styles.small_text_body_span1)}>{item.sno}</span>
            </div>
          </div>
          <h2 className={css(styles.medium_title_box, styles.medium_title_box_layout)}>
            <div className={css(styles.medium_title)}>
              <span className={css(styles.medium_title_span0)}>{item.name}{"\n"}</span>
              <span className={css(styles.medium_title_span1)}>{item.father}{'\n'}</span>
              <span className={css(styles.medium_title_span1)}>{item.family}</span>
            </div>
          </h2>
          <div className={css(styles.text_body_box, styles.text_body_box_layout)}>
            <div className={css(styles.text_body)}>
              <span className={css(styles.text_body_span0)}>{'Возраст:'}</span>
              <span className={css(styles.text_body_span1)}> </span>
              <span className={css(styles.text_body_span2)}>{item.age}</span>
            </div>
          </div>
        </div>
        </div>
      </px-posize>
    ));}
  };


    render() {
        return (            
            <div className={css(styles.block_tab)}>
            <div className="container">
                <h1 className={css(styles.subtitle_tab)}>{'Студенты:'}</h1>
                <br/>
                <div className="row align-items-start">  {this.renderItems()}</div>  </div>
                <div>
               <img src ="filter.png" onClick={() => {this.toggle();}} className={css(styles.block_filter)}></img>
               <div className={css(styles.block_fiter)}>

      </div>
        {this.state.modal ? (
          <Filter
            OnSelectBack={this.handleBack} 
            toggle={this.toggle}
          />
        ) : (null)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        },
        removeFromCart: (product) => {
            dispatch(removeFromCart(product));
        }
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(Students);

const styles = StyleSheet.create({
  block_filter: {
    position: "absolute",
    left: "85%",
    right: "11.6%",
    top: "20.45%",
    bottom: "94%",
    height: 40,
    width: 40,
    minWidth: 40,
    cursor: "pointer"
  },
  block_fiter: {
    position: "absolute",
    left: "80%",
    right: "11.6%",
    top: "20.45%",
    bottom: "94%",
    height: 50,
    width: 50,
    minWidth: 50,
    cursor: "pointer"
  },
  block2: {
    font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
    position: "absolute",
    left: "81.55%",
    right: "11.6%",
    top: "23.2%",
    bottom: "92%",
    height: 25,
    width: 25,
    minWidth: 25,
    cursor: "pointer"
  },
  icon_like_layout: {
    position: 'relative',
    height: 49,
    width: 49,
    minWidth: 49,
    margin: '0px 6px 1px 0px'
  },
  cover_ball: {
    display: 'flex',
    flexDirection: 'column',
  },
  cover_ball_layout: {
    position: 'absolute',
    top: 28,
    bottom: 0,
    minHeight: 22,
    flexShrink: 0,
    left: 33,
    right: 0
  },
  txt: {
    font: '14px/1 Arial, Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px'
  },
  txt_layout: {
    position: 'absolute',
    top: 32,
    height: 18,
    left: 39,
    width: 11,
    minWidth: 11
  },
    block_tab: {
      marginLeft: "auto",
      paddingRight:"0"
    },
    subtitle_tab:{
        fontfamily: 'Raleway',
        fontstyle: "normal",
        fontweight: 600,
        fontsize: "36px",
    },
    block: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgb(255,255,255)',
      boxShadow: '8px 9px 21px 0px rgba(0,0,0,0.14901960784313725)',
      border: '1px solid rgb(255,255,255)',
      borderRadius: '42px 42px 42px 42px',
      // width: '100%',
      height: '100%',
      marginLeft: "30px",
      marginRight: "30px",
      marginTop: "30px",
      marginBottom:"30px"
    },
    flex: {
      display: 'flex',
      flexDirection: 'column'
    },
    flex_layout: {
      position: 'relative',
      height: 532,
      width: 286,
      minWidth: 286,
      margin: '35.2px 0px 0px 17px'
    },
    group: {
      display: 'flex',
      flexDirection: 'column'
    },
    group_layout: {
      position: 'relative',
      height: 'min-content',
      width: '81.12%',
      margin: '-8% 0.45% 0px 12.43%'
    },
    block1: {
      display: 'flex',
      flexDirection: 'column'
    },
    block1_layout: {
      position: 'relative',
      height: 'min-content',
      margin: '205px 36px 11px 0px'
    },
    image: {
    objectfit: "cover"
    },
    image_layout: {
      position: 'absolute',
      top: 8.6,
      height: 211,
      left: 0,
      width: 211,
      minWidth: 211
    },
    image_layout2: {
      position: 'absolute',
      top: 8.6,
      height: 210,
      left: 0,
      width: 210,
      minWidth: 210
    },
    icon: {
  
      cursor: 'pointer'
    },
    icon_layout: {
      position: 'absolute',
      top: 0,
      height: 40,
      width: 40,
      minWidth: 40,
      right: 0,
      margin: '0px 0px 7px'
    },
    text_body1: {
      font: '600 13px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(255,255,255)',
      textAlign: 'center',
      letterSpacing: '-0.1px'
    },
    text_body1_box: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    text_body1_box_layout: {
      position: 'relative',
      height: 'min-content',
      margin: '37px 0px 0px'
    },
    text_body1_span0: {
      font: '600 1em/1.2 "Raleway", Helvetica, Arial, serif',
      color: '#ffffffff',
      letterSpacing: '0px'
    },
    text_body1_span1: {
      font: '300 1em/1.2 "Open Sans", Helvetica, Arial, serif',
      color: '#ffffffff',
      letterSpacing: '0px'
    },
    text_body2: {
      overflow: 'visible',
      marginTop: 0,
      marginBottom: 0,
      margin: 0,
      font: '300 13px/1.2 "Open Sans", Helvetica, Arial, serif',
      color: 'rgb(255,255,255)',
      textAlign: 'center',
      letterSpacing: '0px',
      whiteSpace: 'pre-wrap'
    },
    text_body2_box: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    text_body2_box_layout: {
      position: 'relative',
      height: 28,
      width: 136,
      minWidth: 136,
      margin: '19px 0px 0px 143px'
    },
    flex_spacer: {
      flex: '0 1 40px'
    },
    flex_spacer1: {},
    flex_spacer2: {},
    cover_block: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgb(15,127,204)',
      borderRadius: '20px 0px 0px 20px'
    },
    cover_block_layout: {
      position: 'absolute',
      top: 379.7,
      height: 40,
      left: 170,
      width: 155,
      minWidth: 150,
      marginLeft: "-13.2%",
      marginTop: "-20%",
    },
    subtitle: {
      font: '600 14px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(255,255,255)',
      letterSpacing: '0px'
    },
    subtitle_layout: {
      position: 'absolute',
      top: 6,
      height: 23,
      left: 13,
      width: 150,
      minWidth: 150,
    },
    subtitle3: {
      font: '600 14px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(255,255,255)',
      letterSpacing: '0px'
    },
    subtitle3_layout: {
      position: 'absolute',
      top: 22,
      height: 23,
      left: 13,
      width: 150,
      minWidth: 150,
    },
    cover_block1: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgb(253,106,7)',
      borderRadius: '20px 0px 0px 20px'
    },
    cover_block1_layout: {
      position: 'absolute',
      top: 427.05,
      height: 40,
      left: 150,
      width: 170,
      minWidth: 170,
      marginLeft: "-11.6%",
      marginTop: "-20%",
      
    },
    subtitle1: {
      font: '600 12px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(255,255,255)',
      letterSpacing: '0px'
    },
    subtitle1_layout: {
      position: 'absolute',
      top: 9,
      height: 23,
      left: 13,
      width: 157,
      minWidth: 157,
    },
    cover_block2: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgb(0,0,0)',
      borderRadius: '20px 20px 20px 20px',
      cursor: 'pointer'
    },
    cover_block2_layout: {
      position: 'absolute',
      top: 491.05,
      height: 40,
      left: 44,
      width: 232,
      minWidth: 232,
      marginTop: "-20%",
      marginLeft:"-8%"
    },
    subtitle2: {
      font: '600 18px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(255,255,255)',
      letterSpacing: '0px'
    },
    subtitle2_layout: {
      position: 'relative',
      height: 20,
      width: 144,
      minWidth: 144,
      margin: '8px 0px 0px 44px'
    },
    small_text_body: {
      font: '600 10px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(0,0,0)',
      textAlign: 'center',
      letterSpacing: '-0.1px'
    },
    small_text_body_box: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    small_text_body_box_layout: {
      position: 'absolute',
      top: 543.58,
      height: 14,
      left: "25%",
      width: 140,
      minWidth: 140,
      marginTop: "-20%",
      justifyContent: "center"
      
    },
    small_text_body_span0: {
      font: '600 18px "Raleway", Helvetica, Arial, serif',
      color: '#000000ff',
      letterSpacing: '0px'
    },
    small_text_body_span1: {
      font: '300 18px "Open Sans", Helvetica, Arial, serif',
      color: '#000000ff',
      letterSpacing: 'px'
    },
    medium_title: {
      font: '600 25px/1.09 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(0,0,0)',
      textAlign: 'center',
      letterSpacing: '0px'
    },
    medium_title_box: {
      display: 'flex',
      justifyContent: 'center'
    },
    medium_title_box_layout: {
      position: 'absolute',
      top: 271.9,
      height: 81,
      left: 74,
      width: 176,
      minWidth: 176,
      marginTop:"-20%",
      marginLeft:"-8%"
    },
    medium_title_span0: {
      font: '600 1em/1.09 "Raleway", Helvetica, Arial, serif',
      color: '#000000ff',
      letterSpacing: '0px'
    },
    medium_title_span1: {
      font: '300 1em/1.09 "Open Sans", Helvetica, Arial, serif',
      color: '#000000ff',
      letterSpacing: '0px'
    },
    text_body: {
      font: '600 13px/1.2 "Raleway", Helvetica, Arial, serif',
      color: 'rgb(0,0,0)',
      letterSpacing: '0px'
    },
    text_body_box: {},
    text_body_box_layout: {
      position: 'absolute',
      top: 355.2,
      height: 24,
      left: 103.5,
      width: 134,
      minWidth: 134,
      marginTop:"-20%",
      marginLeft:"-5%"
    },
    text_body_span0: {
      font: '600 1em/1.2 "Raleway", Helvetica, Arial, serif',
      color: '#000000ff',
      letterSpacing: '0px'
    },
    text_body_span1: {
      font: '1em/1.2 "Judson", Helvetica, Arial, serif',
      color: '#000000ff',
      letterSpacing: '0px'
    },
    text_body_span2: {
      font: '300 1em/1.2 "Open Sans", Helvetica, Arial, serif',
      color: '#000000ff',
      letterSpacing: '0px'
    },
    image_back: {
      height: 'auto',
      verticalAlign: 'top',
      objectPosition: 'center top',
      border: '1px solid rgb(255,255,255)',
      borderRadius: '42px 42px 42px 42px',
      // width: '100%',
    },
    image_back_layout: {
      position: 'absolute',
      top: -31,
      left: -61,
      width: 411
    }
  });
  
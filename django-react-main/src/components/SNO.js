import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import { StyleSheet, css } from 'aphrodite/no-important';
import axios from "axios";
import Filter from "./Filter3";

var v = 0;
class SNO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      backurl: 'ФАИТ,ФБТ,ФПТ,ПензГТУ'
    }
    };
  
    refreshList = () => {
      if ((this.state.todoList.length==0) && (v==0)){
      axios
      .patch("http://localhost:8000/object/sortingsno",
      {
        sort_by:"faculty",
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
  v=0}

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
      <div style={{marginLeft: "35%", font: '40px/1.2 "Open Sans", Helvetica, Arial, serif', marginBottom: "40px"}}>
     нет результатов
      </div>
      )
    }
    else{
    return newItems.map(item => (
      <px-posize
      alt-class={`untitled-page ${css(styles.block)}`}
      track-style='{"overflow":"auto"}'
      area-style='{"overflow":"hidden"}'
      x="0px minmax(1109px,1109px) 0px"
      y="0px minmax(400px,420px) 0px">
      <div className={css(styles.block)}>
        <div className={css(styles.flex, styles.flex_layout)}>
          <div className={css(styles.flex1, styles.flex1_layout)}>
            <div className={css(styles.flex1_item)}>
              <div className={css(styles.block2, styles.block2_layout)}>
                <div className={css(styles.block2_item)}>
                  <div className={css(styles.block3, styles.block3_layout)}>
                    <img
                      src={item.img}
                      style={{ objectFit: "cover" }}
                      className={css(styles.image_company, styles.image_layout2)}
                    />
                    <img
                      src="frame.png"
                      className={css(styles.image, styles.image_layout)}
                    />
                  </div>
                </div>
                <div className={css(styles.block2_spacer)} />
                <div className={css(styles.block2_item1)}>
                  <div className={css(styles.block4, styles.block4_layout)}>
                    <h2 className={css(styles.medium_title_box, styles.medium_title_box_layout)}>
                      <pre className={css(styles.medium_title)}>
                        <span className={css(styles.medium_title_span0)}>{item.name+"\n"}</span>
                        <span className={css(styles.medium_title_span1)}> </span>
                       
                      </pre>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={css(styles.flex1_spacer)} />
            <div className={css(styles.flex1_item1)}>
              <div className={css(styles.block7, styles.block7_layout)}>
                <div className={css(styles.small_text_body_box, styles.small_text_body_box_layout)}>
                  <div className={css(styles.small_text_body)}>
                    <span className={css(styles.small_text_body_span0)}>{'Руководитель: '}</span>
                    <span className={css(styles.small_text_body_span1)}>{item.leader}</span>
                  </div>
                </div>
                <div className={css(styles.text_body_box, styles.text_body_box_layout)}>
                  <div className={css(styles.text_body)}>
                    <span className={css(styles.text_body_span0)}>{'Факультет: '}</span>
                    <span className={css(styles.text_body_span1)}> </span>
                    <span className={css(styles.text_body_span2)}>{item.faculty}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={css(styles.flex1_spacer1)} />
            <div className={css(styles.flex1_spacer1)} />
              <div className={css(styles.flex1_item2)}>
                <div className={css(styles.block6, styles.block6_layout)} onClick={() => window.open(item.link)}>
                  <h3 className={css(styles.subtitle, styles.subtitle_layout)}>{'Подробнее'}</h3>
                </div>
              </div>
          </div>

          <hr className={css(styles.hr, styles.hr_layout)}></hr>
          <div className={css(styles.block5, styles.block5_layout)}>
            <h2 className={css(styles.medium_title1, styles.medium_title1_layout)}>{'Описание:'}</h2>
            <div className={css(styles.small_paragraph_body_box, styles.small_paragraph_body_box_layout)}>
              <pre className={css(styles.small_paragraph_body)}>
                {
                  item.description
                }
              </pre>
            </div>
          </div>

          <div className={css(styles.block1, styles.block1_layout)}>
            <h4 className={css(styles.highlights, styles.highlights_layout)}>{'Связаться'}</h4>
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
          <h1 className={css(styles.subtitle_tab)}>{'СНО:'}</h1>
          <br />
          <div className="col">  {this.renderItems()}</div>  </div>
        <div>
          <img src="filter.png" onClick={this.toggle} className={css(styles.block_filter)}></img>
          <div className={css(styles.block_fiter)}>
            <div className={css(styles.txt, styles.txt_layout)} href="Cart">
              {
                this.props.cart.length > 0 ? (
                  <div>
                    {this.props.cart.length}</div>
                ) : 0
              }
            </div></div>
          {this.state.modal ? (
            <Filter
              OnSelectBack={this.handleBack}
              activeItem={this.state.activeItem}
              toggle={this.toggle}
            />
          ) : null}
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


export default connect(mapStateToProps, mapDispatchToProps)(SNO);

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
  icon_note_layout: {
    position: 'relative',
    height: 40,
    width: 80,
    minWidth: 80,
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
    left: 38,
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
    left: 42.5,
    width: 11,
    minWidth: 11
  },
  block_tab: {
    marginLeft: "auto",
    paddingRight: "0"
  },
  subtitle_tab: {
    fontfamily: 'Raleway',
    fontstyle: "normal",
    fontweight: 600,
    fontsize: "36px",
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
  block: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    boxShadow: '8px 9px 21px 0px rgba(0,0,0,0.14901960784313725)',
    border: '1px solid rgb(255,255,255)',
    borderRadius: '42px 42px 42px 42px',
    width: '100%',
    height: '100%',
    marginTop: "30px",
    marginBottom:"30px"
  },
  line: {
    backgroundColor: 'rgb(146,143,143)'
  },
  line_layout: {
    position: 'absolute',
    top: "45%",
    height: 2,
    left: 0,
    right: -1
  },
  flex: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex_layout: {
    position: 'relative',
    height: 'min-content',
    width: '88.46%',
    margin: '27px auto'
  },
  flex1: {
    display: 'flex'
  },
  flex1_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '14px 0px 0px'
  },
  flex1_item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 366px'
  },
  block2: {
    display: 'flex'
  },
  block2_layout: {
    position: 'relative',
    height: 'min-content'
  },
  block2_item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 121px'
  },
  block3: {
    display: 'flex',
    flexDirection: 'column'
  },
  block3_layout: {
    position: 'relative',
    height: 'min-content'
  },
  image: {
    width: '100%',
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
    transform:"scale(-1,-1)",
  },
  image_company: {
    width: '100%',
    height: 'auto',
    verticalAlign: 'top',
    objectFit: 'contain',
    objectPosition: 'center top',
  },
  image_layout: {
    position: 'relative',
    width: 128,
    minWidth: 128
  },
  block2_spacer: {
    flex: '0 1 4px'
  },
  block2_item1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 241px'
  },
  block4: {
    display: 'flex',
    flexDirection: 'column'
  },
  block4_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '22px 0px 21px'
  },
  medium_title: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    margin: 0,
    font: '600 25px/1.09 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap'
  },
  medium_title_box: {},
  medium_title_box_layout: {
    position: 'relative',
    height: 'min-content',
    margin: 10
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
  medium_title_span2: {
    font: '300 0.6em/1.09 "Open Sans", Helvetica, Arial, serif',
    color: '#000000ff',
    letterSpacing: '0px'
  },
  flex1_spacer: {
    flex: '0 1 44px'
  },
  flex1_item1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 145px'
  },
  block7: {
    display: 'flex',
    flexDirection: 'column'
  },
  block7_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '29px 0px 50px'
  },
  small_text_body: {
    font: '600 10px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px'
  },
  small_text_body_box: {},
  small_text_body_box_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '5px 6px 0px 0px'
  },
  small_text_body_span0: {
    font: '600 20px "Raleway", Helvetica, Arial, serif',
    color: '#000000ff',
    letterSpacing: '0px'
  },
  small_text_body_span1: {
    font: '300 20px "Open Sans", Helvetica, Arial, serif',
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
    position: 'relative',
    height: 'min-content',
    margin: '6px 0px'
  },
  text_body_span0: {
    font: '600 20px "Raleway", Helvetica, Arial, serif',
    color: '#000000ff',
    letterSpacing: '0px'
  },
  text_body_span1: {
    font: '20px "Judson", Helvetica, Arial, serif',
    color: '#000000ff',
    letterSpacing: '0px'
  },
  text_body_span2: {
    font: '300 20px "Open Sans", Helvetica, Arial, serif',
    color: '#000000ff',
    letterSpacing: '0px'
  },
  flex1_spacer1: {
    flex: '0 1 202px'
  },
  flex1_item2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 192px'
  },
  block6: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(15,127,204)',
    borderRadius: '19.5px 19.5px 19.5px 19.5px',
    cursor: 'pointer'
  },
  block6_layout: {
    position: 'relative',
    height: 'min-content',
    width: "200px",
    margin: '30px 0px 52px'
  },
  subtitle: {
    font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px'
  },
  subtitle_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '8px 33px 7px 38px'
  },
  block5: {
    display: 'flex',
    flexDirection: 'column'
  },
  block5_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '30px 0px 0px'
  },
  medium_title1: {
    font: '600 25px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px'
  },
  medium_title1_layout: {
    position: 'relative',
    height: 'min-content'
  },
  hr: {
      color: '343a40',
      letterSpacing: '0px',
    },
  hr_layout: {
      position: 'relative',
      width:"100%",
  },
  small_paragraph_body: {
    overflow: 'visible',
    marginTop: 0,
    marginBottom: 0,
    margin: 0,
    font: '300 25px/1.2 "Open Sans", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px',
    whiteSpace: 'pre-wrap'
  },
  small_paragraph_body_box: {},
  small_paragraph_body_box_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '5px 1px 14px 0px'
  },
  block1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(253,106,7)',
    borderRadius: '20px 20px 20px 20px',
    cursor: "pointer"
  },
  block1_layout: {
    position: 'relative',
    height: 'min-content',
    width: '200px',
    margin: '8px 3.26% 0px 79.4%'
  },
  highlights: {
    font: '600 18px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    letterSpacing: '0px',
    left:"-2.5%" ,
    textAlign: 'center'
  },
  highlights_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '10px 28px 8px 34px',
  },
  image_layout2: {
    position: 'absolute',
    top: 8.6,
    height: 118,
    left: 0,
    width: 121,
    minWidth: 121
  },
});

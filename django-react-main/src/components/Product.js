import React, { Component} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
          inCart: true
      })

    }
    render() {

        const { product } = this.props;

        return (

    <px-posize
      alt-class={`card ${css(styles.block)}`}
      track-style='{"overflow":"auto"}'
      area-style='{"overflow":"hidden"}'
      x="0px minmax(320px,320px) 0px"
      y="0px minmax(568px,568px) 0px">
      <div className={css(styles.block)}>
        <div className={css(styles.flex, styles.flex_layout)}>
          <div className={css(styles.group, styles.group_layout)}>
            <div className={css(styles.block1, styles.block1_layout)} />
            <img
              src={product.image}
              style={{objectFit: "cover"}}
              className={css(styles.image, styles.image_layout2)}
            />
                <img
              src="frame.png"
              className={css(styles.image, styles.image_layout)}
            />
            {
                  this.state.inCart?(
                    <img 
                    src="like2.png"
                    className={css(styles.icon, styles.icon_layout)}
                    onClick={this.Delete}
                  />
              ) : (
                <img 
                src="like.png"
                className={css(styles.icon, styles.icon_layout)}
                onClick={this.addToCart}
              />)
          }
            


     
        </div>

        <div className={css(styles.cover_block, styles.cover_block_layout)}>
          <h3 className={css(styles.subtitle, styles.subtitle_layout)}>{"Опыт работы: " }{product.exp}{" мес"}</h3>
        </div>

        <div className={css(styles.cover_block1, styles.cover_block1_layout)}>
          <h3 className={css(styles.subtitle1, styles.subtitle1_layout)}>{product.speciality}</h3>
        </div>

        <div className={css(styles.cover_block2, styles.cover_block2_layout)} onClick={() => window.open(product.git)}>
          <h3 className={css(styles.subtitle2, styles.subtitle2_layout)}>{'Галерея работ'}</h3>
        </div>

        <div className={css(styles.small_text_body_box, styles.small_text_body_box_layout)}>
          <div className={css(styles.small_text_body)}>
            <span className={css(styles.small_text_body_span0)}>{'Тэги: '}</span>
            <span className={css(styles.small_text_body_span1)}>{product.tags}</span>
          </div>
        </div>
        <h2 className={css(styles.medium_title_box, styles.medium_title_box_layout)}>
          <div className={css(styles.medium_title)}>
            <span className={css(styles.medium_title_span0)}>{product.title}{"\n"}</span>
            <span className={css(styles.medium_title_span1)}>{product.father}{'\n'}</span>
            <span className={css(styles.medium_title_span1)}>{product.family}</span>
          </div>
        </h2>
        <div className={css(styles.text_body_box, styles.text_body_box_layout)}>
          <div className={css(styles.text_body)}>
            <span className={css(styles.text_body_span0)}>{'Возраст:'}</span>
            <span className={css(styles.text_body_span1)}> </span>
            <span className={css(styles.text_body_span2)}>{product.age}</span>
          </div>
        </div>
      </div>
      </div>
    </px-posize>
  );
}}

export default Product;

const styles = StyleSheet.create({
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
    top: 12,
    height: 23,
    left: 2.5,
    width: 159,
    marginLeft: "3%"
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
    marginTop: "-20%"
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
    minWidth: 157
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
    height: 23,
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
    font: '600 1em/1.2 "Raleway", Helvetica, Arial, serif',
    color: '#000000ff',
    letterSpacing: '0px'
  },
  small_text_body_span1: {
    font: '300 1em/1.2 "Open Sans", Helvetica, Arial, serif',
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
  }
});

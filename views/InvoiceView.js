import React, { Component } from 'react';
import {View, Text, TouchableOpacity,ScrollView} from 'react-native'
import { StyleInvoice} from '../config/CommonStyles';
import Constants from '../config/Constants';
export default class Invoice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            datasource:[
                {id:'1',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
                {id:'2',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
                {id:'3',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
                {id:'4',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
                {id:'5',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
            ]
        }
    }
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center'}}>
                <ScrollView>
                    <View style={StyleInvoice.InvoiceModalView}>
                        <Text style={[StyleInvoice.InvoiceTitle,{alignSelf:'center'}]}>{Constants.Invoice}</Text>
                        
                         <View style={{alignSelf:'flex-end',flexDirection:'column',paddingBottom:15}}>
                             <Text style={StyleInvoice.invoiceLabel}>[Name] - [Campany Name]</Text>
                             <Text style={[StyleInvoice.invoiceLabel,{textAlign:'right'}]}>[Street Address]</Text>
                             <Text style={[StyleInvoice.invoiceLabel,{textAlign:'right'}]}>[City,St ZIP Code]</Text>
                             <Text style={[StyleInvoice.invoiceLabel,{textAlign:'right'}]}>[Phone]</Text>
                         </View>

                         <View style={StyleInvoice.InvoicebottomLine}>
                         </View>

                         <Text style={[StyleInvoice.InvoiceTitle,{alignSelf:'flex-start',fontSize:Constants.FONT_SIZE_EXTRA_LARGE}]}>{Constants.Invoice}</Text>
                        
                         <View style={{alignSelf:'flex-start',flexDirection:'column',paddingBottom:15}}>
                             <Text style={[StyleInvoice.invoiceLabel,{textAlign:"left"}]}>[Name] - [Campany Name]</Text>
                             <Text style={[StyleInvoice.invoiceLabel,{textAlign:"left"}]}>[Street Address]</Text>
                             <Text style={[StyleInvoice.invoiceLabel,{textAlign:"left"}]}>[City,St ZIP Code]</Text>
                         </View>

                            <View style={{flexDirection:'row',alignItems:'center',}}>
                                <View style={{flexDirection:'row',alignItems:'center',width:'30%'}}>
                                    <Text style={[StyleInvoice.invoiceLabel,{fontWeight:'bold',}]}>#</Text> 
                                    <Text style={[StyleInvoice.invoiceLabel,{fontWeight:'bold',paddingLeft:'5%'}]}>{Constants.Description}</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center',paddingLeft:'8%',width:'70%',justifyContent:'flex-end'}}>
                                    <Text style={[StyleInvoice.invoiceLabel,{fontWeight:'bold',paddingRight:'15%'}]}>{Constants.Quantity}</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,{fontWeight:'bold',paddingRight:'15%'}]}>{Constants.Price}</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,{fontWeight:'bold',paddingRight:4}]}>{Constants.Total}</Text>
                                </View>
                            </View>

                            {this.state.datasource.map((item,index)=>(
                                  <View style={{flexDirection:'row',alignItems:'center',}}>
                                  <View style={{flexDirection:'row',alignItems:'center',width:'50%'}}>
                                      <Text style={[StyleInvoice.invoiceLabel,{}]}>{item.id}</Text> 
                                      <Text style={[StyleInvoice.invoiceLabel,{paddingLeft:'5%'}]}>{item.desc}</Text>
                                  </View>
                                  <View style={{flexDirection:'row',alignItems:'center',paddingLeft:'15%',width:'50%',justifyContent:'flex-end'}}>
                                      <Text style={[StyleInvoice.invoiceLabel,{paddingRight:40}]}>{item.quantity}</Text>
                                      <Text style={[StyleInvoice.invoiceLabel,{marginRight:'15%'}]}>$ {item.price}</Text>
                                      <Text style={[StyleInvoice.invoiceLabel,{}]}>$ {item.total}</Text>
                                  </View>
                              </View>
                             ))}

                               <View style={{alignSelf:'flex-end',paddingTop:5}}>
                                    <View style={{flexDirection:'row',alignSelf:'flex-end',paddingTop:1}}>
                                        <Text style={[StyleInvoice.invoiceLabel,{marginRight:20,fontWeight:'bold'}]}>Subtotal</Text>
                                        <Text style={[StyleInvoice.invoiceLabel,]}>$176</Text>
                                    </View>

                                    <View style={{flexDirection:'row',alignSelf:'flex-end',paddingTop:1}}>
                                        <Text style={[StyleInvoice.invoiceLabel,{marginRight:20,}]}>SalesTax 8%</Text>
                                        <Text style={[StyleInvoice.invoiceLabel,]}>$176</Text>
                                    </View>

                                    <View style={{flexDirection:'row',alignSelf:'flex-end',paddingTop:1}}>
                                        <Text style={[StyleInvoice.invoiceLabel,{marginRight:20,}]}>shipping And Handling</Text>
                                        <Text style={[StyleInvoice.invoiceLabel,]}>$176</Text>
                                    </View>
                               </View>
                               <View style={StyleInvoice.InvoicebottomLine}>
                               </View>

                               <View style={{flexDirection:'row',alignSelf:'flex-end',paddingTop:1}}>
                                    <Text style={[StyleInvoice.invoiceLabel,{marginRight:10,fontWeight:'bold'}]}>Total due</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,]}>$176.48</Text>
                               </View>

                               <View style={{alignSelf:'flex-start',paddingTop:10}}>
                                    <Text style={[StyleInvoice.invoiceLabel,{fontWeight:'bold'}]}>Invoice Details</Text>
                                  <Text style={[StyleInvoice.invoiceLabel,]}>invoice:100</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,]}>invoice date : feb 23,2016</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,]}>due date : march 24,2016</Text>
                               </View>

                               <View style={{alignSelf:'flex-start',paddingTop:10}}>
                                    <Text style={[StyleInvoice.invoiceLabel,{fontWeight:'bold'}]}>Please Make a payment TO</Text>
                                  <Text style={[StyleInvoice.invoiceLabel,]}>Beneficiary Name : [campany name]</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,]}>Beneficiary account number : 45121354556</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,]}>bank name and address : [bank name and address]</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,]}>bank swift code : [123254454]</Text>
                                    <Text style={[StyleInvoice.invoiceLabel,]}>pan number:[124588622]</Text>
                               </View>


                               <View style={{alignSelf:'flex-start',paddingTop:10}}>
                            <Text style={[StyleInvoice.invoiceLabel,{fontWeight:'bold'}]}>terms and condition</Text>
                            <Text style={[StyleInvoice.invoiceLabel,]}>{Constants.termsAndConditionMsg}</Text>
                                    
                               </View>
                               <TouchableOpacity style={StyleInvoice.buttonView}
                               onPress={()=>{
                                   if(this.props.clickCallback!=undefined){
                                this.props.clickCallback();
                               
                                   }
                               }}>
                                   <Text style={StyleInvoice.buttonText}>{ Constants.DownloadInvoice}</Text>
                               </TouchableOpacity>
                         </View>
                         </ScrollView>
            </View>
        )
    }
}
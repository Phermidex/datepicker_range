jQuery(document).ready(function(){              
               var array = ["07/03/2019" ,"26/02/2019","27/02/2019","28/02/2019","01/03/2019","02/03/2019","03/03/2019","04/03/2019","05/03/2019"]; 
               jQuery('.chkQuestions.pad10.boxShadow.date input').attr('id', 'datepicker');
               jQuery('#datepicker').attr('placeholder','Select Shipping Date');
               var currentTime = new Date();
                     currentTime.setDate(currentTime.getDate()+8 );
                    
               
             
               var minDate = new Date(currentTime.getFullYear(), currentTime.getMonth() , currentTime.getDate()); //one day next before month
               //var maxDate =  new Date(currentTime.getFullYear(), currentTime.getMonth() +4, +0); // one day before next month
               var maxDate =  new Date(currentTime.getFullYear(), currentTime.getMonth() +1, +6); // six days before current month
               $( "#datepicker" ).datepicker({ 
                     minDate: minDate , 
                     maxDate: maxDate,
                    beforeShowDay: function(date){
                            var string = jQuery.datepicker.formatDate('dd/mm/yy', date);
                             return [ array.indexOf(string) == -1 ]
                          }
                 });
               //jQuery( "#datepicker" ).datepicker();
          });

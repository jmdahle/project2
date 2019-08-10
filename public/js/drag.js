
    $( function(){
 
        $('.dragAble').draggable({
          "containment" : "#content",
          "cursor" : "move",
          "stack" : ".dragAble"
        });
        
   
        $( ".dropAble" ).droppable({
          "accept" : ".dragAble",
          "hoverClass" : "highlight",
          
          "drop" : function( event, ui ){
                $( ui.draggable ).data("q", $( this ).data('q'));
              },
        });
        
   
          $( "#bouton" ).on( "click", function( event ){
              var
                droppableCorrectAnswers = [ "1-a","1-e","1-g","2-b","2-d", "3-c","3-f" ],
               
                droppableBoolResult = [],
              
                droppableResults = [],
                
              point = 0;
       
              var jObjDropAble = $(".dropAble"),
                $dragAble = $('.dragAble');
              
              
              jObjDropAble.removeClass( "true false" );
       
                  $dragAble.each( function( key, value ){
            var $this = $(value);
            droppableResults.push( $this.data( "q" ) + "-" + $this.data( "r" ) );
                  });
  
              
              alert(droppableResults);//TEST///////////////////////////
       
       
              $.each( droppableResults, function( index, value ){
                if ( $.inArray( value, droppableCorrectAnswers ) == -1 ){										
                  droppableBoolResult.push( false );
                } else {
                  droppableBoolResult.push( true );
                  ++point;
                }
              });
       
              $.each( droppableBoolResult, function( i, item ){
                if ( item ){
                  jObjDropAble.eq( i ).addClass( "true" );
                } else {
                  jObjDropAble.eq( i ).addClass( "false" );
                }  
              });
                      document.getElementById("point").innerHTML = point;
          });
   
      });
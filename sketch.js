var fromCelsius,fromFahrenheit,fromKelvin;
var toCelsius,toFahrenheit,fromKelvin;
var proceedButton;
var fromState = "neutral";
var toState = "neutral";
var combinedState = "neutral";
var calculationState = "neutral";
var celsiusInput,fahrenheitInput,kelvinInput;
var answerCelsiusToFahrenheit , answerCelsiusToKelvin;
var answerFahrenheitToCelsius , answerFahrenheitToKelvin;
var answerKelvinToCelsius , answerKelvinToFahrenheit;

var celsiusNotSelected,celsiusSelected;
var fahrenheitNotSelected,fahrenheitSelected;
var kelvinNotSelected,kelvinSelected;
var mainTitle,mainTitleImage;
var proceedButtonImage;
var bgImage;
var divisionBorder,divisionBorderImage;
var divisionBorder2;

var westfaliaFont;
var bluntFont,comicSansMsFont;
var toDisplay,toImage,fromDisplay,fromImage;

var clickSound,proceedButtonSound;

function preload(){
  celsiusNotSelected = loadImage("Img celsius_not_selected-removebg-preview.png");
  celsiusSelected = loadImage("Img celsius_selected-removebg-preview.png");

  fahrenheitNotSelected = loadImage("Img fahrenheit_not_selected-removebg-preview.png");
  fahrenheitSelected = loadImage("Img fahrenheit_selected-removebg-preview.png");

  kelvinNotSelected = loadImage("Img kelvin_not_selected-removebg-preview.png");
  kelvinSelected = loadImage("Img kelvin_selected-removebg-preview.png");

  mainTitleImage = loadImage("Main Title 1.png");
  proceedButtonImage = loadImage("Img_Proceed_Button_Image-removebg-preview.png");

  bgImage = loadImage("Bg Image.jpeg");

  divisionBorderImage = loadImage("division line (bg removed).png");

  westFaliaFont = loadFont("Westfalia-Regular.otf");
  bluntFont = loadFont("Blunt blunt.ttf");
  comicSansMsFont = loadFont("ComicSansMS3.ttf");

  toImage = loadImage("ImgTo-removebg-preview.png");
  fromImage = loadImage("ImgFrom-removebg-preview.png");

  clickSound = loadSound("Click Sound 1.mp3");
  proceedButtonSound = loadSound("Proceed Button Sound.mp3");
}



function setup() {
  createCanvas(windowWidth,windowHeight);

  fromCelsius = createSprite(windowWidth/20,windowHeight/3.7,50,50);
  fromCelsius.addImage("notSelected",celsiusNotSelected);
  fromCelsius.addImage("selected",celsiusSelected);
  fromCelsius.scale = 0.35;

  fromFahrenheit = createSprite(windowWidth/5.8,windowHeight/3.7,50,50);
  fromFahrenheit.addImage("notSelected",fahrenheitNotSelected);
  fromFahrenheit.addImage("selected",fahrenheitSelected);
  fromFahrenheit.scale = 0.35;

  fromKelvin = createSprite(windowWidth/3.35,windowHeight/3.7,50,50);
  fromKelvin.addImage("notSelected",kelvinNotSelected);
  fromKelvin.addImage("selected",kelvinSelected);
  fromKelvin.scale = 0.35;


  toCelsius = createSprite(windowWidth/20,windowHeight/1.8,50,50);
  toCelsius.addImage("notSelected",celsiusNotSelected);
  toCelsius.addImage("selected",celsiusSelected);
  toCelsius.scale = 0.35;

  toFahrenheit = createSprite(windowWidth/5.8,windowHeight/1.8,50,50);
  toFahrenheit.addImage("notSelected",fahrenheitNotSelected);
  toFahrenheit.addImage("selected",fahrenheitSelected);
  toFahrenheit.scale = 0.35;
  

  toKelvin = createSprite(windowWidth/3.35,windowHeight/1.8,50,50);
  toKelvin.addImage("notSelected",kelvinNotSelected);
  toKelvin.addImage("selected",kelvinSelected);
  toKelvin.scale = 0.35;

  proceedButton = createSprite(windowWidth/5.9,windowHeight/1.2,150,50);
  proceedButton.addImage(proceedButtonImage);
  proceedButton.scale = 0.5;

  mainTitle = createSprite(windowWidth/2.05,windowHeight/20);
  mainTitle.addImage(mainTitleImage);
  mainTitle.scale = 0.6;
  

  divisionBorder = createSprite(windowWidth/2.1,windowHeight/1.552,10,windowHeight);
  divisionBorder.shapeColor = "#366163";

  divisionBorder2 = createSprite(windowWidth/1.3457,windowHeight/2.1,windowWidth/1.9,10);
  divisionBorder2.shapeColor = "#366163";
  

  fromDisplay = createSprite(windowWidth/17,windowHeight/8,50,50);
  fromDisplay.addImage(fromImage);
  fromDisplay.scale = 0.3;

  toDisplay = createSprite(windowWidth/20,windowHeight/2.4,50,50);
  toDisplay.addImage(toImage);
  toDisplay.scale = 0.3;
}

function draw() {
  background(bgImage);
  // Calling Funcitons
  selectingState();
  combinedStateChange();
  proceedCheckingStates();
  //mouseReleased();

  // textSize(30);
  // text("Temperature Converter",windowWidth/2.8,windowHeight/20);
  // line(windowWidth/2.9,windowHeight/15,windowWidth/1.6,windowHeight/15);


  // textSize(20);
  // text("CELSIUS",fromCelsius.x-40,fromCelsius.y-40);

  // text("Fahrenheit",fromFahrenheit.x-40,fromFahrenheit.y-40);

  // text("Kelvin",fromKelvin.x-30,fromKelvin.y-40);

  


  // text("CELSIUS",toCelsius.x-40,toCelsius.y-40);

  // text("Fahrenheit",toFahrenheit.x-40,toFahrenheit.y-40);

  // text("Kelvin",toKelvin.x-30,toKelvin.y-40);

  // text("Proceed",proceedButton.x-30,proceedButton.y-40);


  // strokeStyle = "#63e9f2";
  //strokeWeight(10);
  //line(windowWidth/2.1,windowHeight/15,windowWidth/2.1,windowHeight/1/1);

  drawSprites();
}

function mouseReleased(){
  if(mouseIsOver(fromCelsius)&&fromState==="neutral"||mouseIsOver(fromCelsius)&&fromState==="fromFahrenheit"||mouseIsOver(fromCelsius)&&fromState==="fromKelvin"){
    fromState = "fromCelsius";
    fromCelsius.changeAnimation("selected",celsiusSelected);

    fromFahrenheit.changeAnimation("notSelected",fahrenheitNotSelected);
    fromKelvin.changeAnimation("notSelected",kelvinNotSelected);

    clickSound.play();

  }

  if(mouseIsOver(fromFahrenheit)&&fromState==="neutral"||mouseIsOver(fromFahrenheit)&&fromState==="fromCelsius"||mouseIsOver(fromFahrenheit)&&fromState==="fromKelvin"){
    fromState = "fromFahrenheit";
    fromFahrenheit.changeAnimation("selected",fahrenheitSelected);

    fromCelsius.changeAnimation("notSelected",celsiusNotSelected);
    fromKelvin.changeAnimation("notSelected",kelvinNotSelected);

    clickSound.play();
    
  }

  if(mouseIsOver(fromKelvin)&&fromState==="neutral"||mouseIsOver(fromKelvin)&&fromState==="fromCelsius"||mouseIsOver(fromKelvin)&&fromState==="fromFahrenheit"){
    fromState = "fromKelvin";
    fromKelvin.changeAnimation("selected",kelvinSelected);

    fromCelsius.changeAnimation("notSelected",celsiusNotSelected);
    fromFahrenheit.changeAnimation("notSelected",fahrenheitNotSelected);

    clickSound.play();
    
    
  }

  

    

  
  // toState changing
  if(mouseIsOver(toCelsius)&&toState==="neutral"||mouseIsOver(toCelsius)&&toState==="toFahrenheit"||mouseIsOver(toCelsius)&&toState==="toKelvin"){
    toState = "toCelsius";
    toCelsius.changeAnimation("selected",celsiusSelected);

    toFahrenheit.changeAnimation("notSelected",fahrenheitNotSelected);
    toKelvin.changeAnimation("notSelected",kelvinNotSelected);

    clickSound.play();



  }

  if(mouseIsOver(toFahrenheit)&&toState==="neutral"||mouseIsOver(toFahrenheit)&&toState==="toCelsius"||mouseIsOver(toFahrenheit)&&toState==="toKelvin"){
    toState = "toFahrenheit";
    toFahrenheit.changeAnimation("selected",fahrenheitSelected);

    toCelsius.changeAnimation("notSelected",celsiusNotSelected);
    toKelvin.changeAnimation("notSelected",kelvinNotSelected);

    clickSound.play();
    
  }

  if(mouseIsOver(toKelvin)&&toState==="neutral"||mouseIsOver(toKelvin)&&toState==="toCelsius"||mouseIsOver(toKelvin)&&toState==="toFahrenheit"){
    toState = "toKelvin";
    toKelvin.changeAnimation("selected",kelvinSelected);
    toCelsius.changeAnimation("notSelected",celsiusNotSelected);
    toFahrenheit.changeAnimation("notSelected",fahrenheitNotSelected);

    clickSound.play(); 
    
  }

  if(mouseIsOver(proceedButton)){
    clickSound.play();
  }


}

function selectingState(){
  // interlink means to state - from state selection
  // fromState changing
  

  // text("fromState "+fromState,500,200);
  // text("toState "+toState,500,300);


}

function combinedStateChange(){
  // for converting celsius to other units
  if(fromState==="fromCelsius"&&toState==="toCelsius"){
    combinedState = "neutral";
  }

  if(fromState==="fromCelsius"&&toState==="toFahrenheit"){
    combinedState = "celsiusToFahrenheit";
  }

  if(fromState==="fromCelsius"&&toState==="toKelvin"){
    combinedState = "celsiusToKelvin";
  }

 
  // for converting fahrenheit to other units
  if(fromState==="fromFahrenheit"&&toState==="toCelsius"){
    combinedState = "fahrenheitToCelsius";
  }

  if(fromState==="fromFahrenheit"&&toState==="toFahrenheit"){
    combinedState = "neutral";
  }

  if(fromState==="fromFahrenheit"&&toState==="toKelvin"){
    combinedState = "fahrenheitToKelvin";
  }

  // for converting kelvin to other units
  if(fromState==="fromKelvin"&&toState==="toCelsius"){
    combinedState = "kelvinToCelsius";
  }

  if(fromState==="fromKelvin"&&toState==="toFahrenheit"){
    combinedState = "kelvinToFahrenheit";
  }

  if(fromState==="fromKelvin"&&toState==="toKelvin"){
    combinedState = "neutral";
  }

  // text("combinedState "+combinedState,500,400);



}

function proceedCheckingStates(){
  // No Units Selected
  if(mousePressedOver(proceedButton)&&combinedState==="neutral"&&fromState==="neutral"&&fromState==="neutral"){
    calculationState = "noUnitSelected";
    
  }
  
  if(calculationState==="noUnitSelected"){
    textSize(31);
    fill(166, 3, 3);
    textFont(comicSansMsFont);
    text("Please Select The Units For Conversion",windowWidth/1.96,windowHeight/4);
  }


  // Same Units Selected
  if(mousePressedOver(proceedButton)&&fromState==="fromCelsius"&&toState==="toCelsius" ||mousePressedOver(proceedButton)&&fromState==="fromFahrenheit"&&toState==="toFahrenheit" ||mousePressedOver(proceedButton)&&fromState==="fromKelvin"&&toState==="toKelvin"){
    calculationState = "sameUnitSelected";
    
  }
  
  
  if(calculationState==="sameUnitSelected"){
    textSize(31);
    fill(166, 3, 3);
    textFont(comicSansMsFont);
    text("Please Select Different Units For Conversion",windowWidth/2.065,windowHeight/4);
  }


  // FromCelsius toOthers
  // toFahrenheit
  if(mousePressedOver(proceedButton)&&fromState==="fromCelsius"&&toState==="toFahrenheit"){
    calculationState = "celsiusToFahrenheit";
    celsiusInput = prompt("Enter the value in degree celsius : ",100);
    
  }
  
  
  if(calculationState==="celsiusToFahrenheit"){
    // text("Celsius Value: "+celsiusInput,700,200); 
    answerCelsiusToFahrenheit = ((celsiusInput*9/5)+32);
   textSize(31);
   fill(4, 85, 102);
   textFont(comicSansMsFont);
   text(celsiusInput+" celsius degree in fahrenheit = ",windowWidth/1.9,windowHeight/4);
   text(answerCelsiusToFahrenheit+" degree fahrenheit",windowWidth/1.7,windowHeight/3);

   text("Formula Used:- ",windowWidth/1.9,windowHeight/1.8);

   fill(1, 59, 79);
   text("F = (C × 9/5) + 32 ",windowWidth/1.9,windowHeight/1.5);
   text("F = (" +celsiusInput+" × 9/5) + 32",windowWidth/1.9,windowHeight/1.35);
   text(("F = " +celsiusInput*9/5)+" +32 ",windowWidth/1.9,windowHeight/1.23);
   text("F = " +((celsiusInput*9/5)+32)+" degree fahrenheit",windowWidth/1.9,windowHeight/1.13);
  }


  // textSize(31);
  // textFont(westFaliaFont);
  // text("TB77 Here",650,400);

  // toKelvin
  if(mousePressedOver(proceedButton)&&fromState==="fromCelsius"&&toState==="toKelvin"){
    calculationState = "celsiusToKelvin";
    celsiusInput = prompt("Enter the value in degree celsius : ",100);
    
  }
  
  
  if(calculationState==="celsiusToKelvin"){
    // text("Celsius Value: "+celsiusInput,700,200); 
    answerCelsiusToKelvin = (celsiusInput/1)+273;
   //text(celsiusInput+" celsius degree in kelvin = "+answerCelsiusToKelvin+" kelvin",800,100);

   textSize(31);
   fill(4, 85, 102);
   textFont(comicSansMsFont);
   text(celsiusInput+" celsius degree in kelvin = ",windowWidth/1.9,windowHeight/4);
   text(answerCelsiusToKelvin+" kelvin",windowWidth/1.6,windowHeight/3);

   text("Formula Used:- ",windowWidth/1.9,windowHeight/1.8);

   fill(1, 59, 79);
   text("K = C + 273 ",windowWidth/1.9,windowHeight/1.5);
   text("K = " +celsiusInput+" + 273",windowWidth/1.9,windowHeight/1.35);
   text("K = " +(celsiusInput/1+273) +" Kelvin",windowWidth/1.9,windowHeight/1.23);
  //  text("F = " +((celsiusInput*9/5)+32)+" degree fahrenheit",windowWidth/1.9,windowHeight/1.13);
  }



  // FromFahrenheit toOthers
  // toFahrenheit
  if(mousePressedOver(proceedButton)&&fromState==="fromFahrenheit"&&toState==="toCelsius"){
    calculationState = "fahrenheitToCelsius";
    fahrenheitInput = prompt("Enter the value in degree fahrenheit : ",212);
    
  }
  
  
  if(calculationState==="fahrenheitToCelsius"){
    // text("Fahrenheit Value: "+fahrenheitInput,700,200); 
    answerFahrenheitToCelsius = ((fahrenheitInput-32)*5/9);
   //text(fahrenheitInput+" fahrenheit degree in celsius = "+answerFahrenheitToCelsius+" degree celsius",800,100);

   textSize(31);
   fill(4, 85, 102);
   textFont(comicSansMsFont);
   text(fahrenheitInput+" fahrenheit degree in celsius = ",windowWidth/1.9,windowHeight/4);
   text(answerFahrenheitToCelsius+" degree celsius",windowWidth/1.65,windowHeight/3);

   text("Formula Used:- ",windowWidth/1.9,windowHeight/1.8);
   
   fill(1, 59, 79);
   text("C = (F - 32) × 5/9",windowWidth/1.9,windowHeight/1.5);

   
   text("C = ("+fahrenheitInput+" - 32) × 5/9 ",windowWidth/1.9,windowHeight/1.35);
   text("C = ("+(fahrenheitInput-32)+") × 5/9 ",windowWidth/1.9,windowHeight/1.23);
   text("C = "+((fahrenheitInput-32)*5/9)+" degree celsius",windowWidth/1.9,windowHeight/1.13);



  //  text("F = " +((celsiusInput*9/5)+32)+" degree fahrenheit",windowWidth/1.9,windowHeight/1.13);
   
  }



  // toKelvin
  if(mousePressedOver(proceedButton)&&fromState==="fromFahrenheit"&&toState==="toKelvin"){
    calculationState = "fahrenheitToKelvin";
    fahrenheitInput = prompt("Enter the value in degree fahrenheit : ",212);
  }
  
  
  if(calculationState==="fahrenheitToKelvin"){
    // text("Fahrenheit Value: "+fahrenheitInput,700,200); 
    answerFahrenheitToKelvin = (((fahrenheitInput)-32)*5/9) + 273;
   //text(fahrenheitInput+" fahrenheit degree in kelvin = "+answerFahrenheitToKelvin+" kelvin",800,100);

   textSize(31);
   fill(4, 85, 102);
   textFont(comicSansMsFont);
   text(fahrenheitInput+" fahrenheit degree in kelvin = ",windowWidth/1.9,windowHeight/4);
   text(answerFahrenheitToKelvin+" kelvin",windowWidth/1.55,windowHeight/3);

   text("Formula Used:- ",windowWidth/1.9,windowHeight/1.8);

   fill(1, 59, 79);
   text("K = ((F - 32) × 5/9) + 273 ",windowWidth/1.9,windowHeight/1.5);
   text("K = ("+fahrenheitInput+" - 32) × 5/9) + 273 "    ,windowWidth/1.9,windowHeight/1.35);
   text("K = ("+(fahrenheitInput/1-32)+") × 5/9) + 273",windowWidth/1.9,windowHeight/1.23);
   text("K = "+(((fahrenheitInput)-32)*5/9)+" + 273",windowWidth/1.9,windowHeight/1.13);
   text("K = "+((((fahrenheitInput)-32)*5/9) + 273)+" kelvin",windowWidth/1.9,windowHeight/1.05);

   //text("C = ("+(fahrenheitInput-32)+") × 5/9 ",windowWidth/1.9,windowHeight/1.23);

  }



  // FromKelvin toOthers
  // toCelsius
  if(mousePressedOver(proceedButton)&&fromState==="fromKelvin"&&toState==="toCelsius"){
    calculationState = "kelvinToCelsius";
    kelvinInput = prompt("Enter the value in kelvin : ",373);
    
  }
  
  
  if(calculationState==="kelvinToCelsius"){
    //text("Kelvin Value: "+kelvinInput,700,200); 
    answerKelvinToCelsius = (kelvinInput/1)-273;
   //text(kelvinInput+" kelvin in celsius = "+answerKelvinToCelsius+" degree celsius",800,100);

   textSize(31);
   fill(4, 85, 102);
   textFont(comicSansMsFont);
   text(kelvinInput+" kelvin in celsius = ",windowWidth/1.65,windowHeight/4);
   text(answerKelvinToCelsius+" degree celsius",windowWidth/1.62,windowHeight/3);

   text("Formula Used:- ",windowWidth/1.65,windowHeight/1.8);

   fill(1, 59, 79);
   text("C = K - 273  ",windowWidth/1.65,windowHeight/1.5);
   text("C = "+kelvinInput+" - 273",windowWidth/1.65,windowHeight/1.35);
   text("C = "+((kelvinInput/1)-273)+" degree celsius",windowWidth/1.65,windowHeight/1.23);
  }



  // toFahrenheit
  if(mousePressedOver(proceedButton)&&fromState==="fromKelvin"&&toState==="toFahrenheit"){
    calculationState = "kelvinToFahrenheit";
    kelvinInput = prompt("Enter the value in kelvin : ",373);
  }
  
  
  if(calculationState==="kelvinToFahrenheit"){
    //text("Kelvin Value: "+kelvinInput,700,200); 
    answerKelvinToFahrenheit = ((kelvinInput-273)*9/5) + 32;
   //text(kelvinInput+" kelvin in degree Fahrenheit = "+answerKelvinToFahrenheit+" degree fahrenheit",800,100);

   textSize(31);
   fill(4, 85, 102);
   textFont(comicSansMsFont);
   text(kelvinInput+" kelvin in degree Fahrenheit = ",windowWidth/1.9,windowHeight/4);
   text(answerKelvinToFahrenheit+" degree fahrenheit",windowWidth/1.7,windowHeight/3);

   text("Formula Used:- ",windowWidth/1.9,windowHeight/1.8);

   fill(1, 59, 79);
   text("F = ((K - 273) × 9/5) + 32 ",windowWidth/1.9,windowHeight/1.5);
   text("F = ("+kelvinInput+" - 273) × 9/5) + 32 "    ,windowWidth/1.9,windowHeight/1.35);
   text("F = ("+(kelvinInput/1-273)+") × 9/5) + 32",windowWidth/1.9,windowHeight/1.23);
   text("F = "+(((kelvinInput)-273)*9/5)+" + 32",windowWidth/1.9,windowHeight/1.13);
   text("F = "+((((kelvinInput)-273)*9/5) + 32)+" degree fahrenheit",windowWidth/1.9,windowHeight/1.05);

   
  }







}

const ejercicios = [
  {
    "name": "Discos",
    "exact": "32π/5",
    "value": 20.106192982974676,
    "commands": [
      "f(x)=x^2",
      "region=Integral(f,0,2)",
      "a=Slider(0.01,2*pi,0.01)",
      "a=2*pi",
      "p=Slider(0.01,2,0.01)",
      "p=1",
      "n=Slider(1,500,1)",
      "n=10",
      "s_1=Surface(u,u^2*cos(v),u^2*sin(v),u,0,2,v,0,a)",
      "s_2=Surface(2,u*cos(v),u*sin(v),u,0,4,v,0,a)",
      "seccion=Surface(p,u*cos(v),u*sin(v),u,0,p^2,v,0,2*pi)",
      "h(x)=pi*f(x)^2",
      "vol=Integral(h,0,2)",
      "aprox=RectangleSum(h,0,2,n,0.5)",
      "error=abs(vol-aprox)"
    ]
  },
  {
    "name": "Arandelas",
    "exact": "9π",
    "value": 28.274333882308138,
    "commands": [
      "f(x)=2",
      "g(x)=1",
      "region=IntegralBetween(f,g,0,3)",
      "a=Slider(0.01,2*pi,0.01)",
      "a=2*pi",
      "p=Slider(0.01,3,0.01)",
      "p=1",
      "n=Slider(1,500,1)",
      "n=10",
      "s_1=Surface(u,2*cos(v),2*sin(v),u,0,3,v,0,a)",
      "s_2=Surface(u,cos(v),sin(v),u,0,3,v,0,a)",
      "s_3=Surface(0,u*cos(v),u*sin(v),u,1,2,v,0,a)",
      "s_4=Surface(3,u*cos(v),u*sin(v),u,1,2,v,0,a)",
      "seccion=Surface(p,u*cos(v),u*sin(v),u,1,2,v,0,2*pi)",
      "h(x)=pi*(f(x)^2-g(x)^2)",
      "vol=Integral(h,0,3)",
      "aprox=RectangleSum(h,0,3,n,0.5)",
      "error=abs(vol-aprox)"
    ]
  },
  {
    "name": "Cascarones",
    "exact": "16π/5",
    "value": 10.053096491487338,
    "commands": [
      "f(x)=x^2*(2-x)",
      "region=Integral(f,0,2)",
      "a=Slider(0.01,2*pi,0.01)",
      "a=2*pi",
      "p=Slider(0.01,2,0.01)",
      "p=1",
      "n=Slider(1,500,1)",
      "n=10",
      "s_1=Surface(u*cos(v),u^2*(2-u),u*sin(v),u,0,2,v,0,a)",
      "s_2=Surface(u*cos(v),0,u*sin(v),u,0,2,v,0,a)",
      "seccion=Surface(p*cos(v),u,p*sin(v),u,0,f(p),v,0,2*pi)",
      "h(x)=2*pi*x*f(x)",
      "vol=Integral(h,0,2)",
      "aprox=RectangleSum(h,0,2,n,0.5)",
      "error=abs(vol-aprox)"
    ]
  }
];

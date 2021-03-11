class Box extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }

  display()
  {
    fill(rgb(103,209,234));
    super.display();
  }
}
var so_a = prompt(" nhập số ");
let b=0 ;
if (so_a<8)
{
    document.write(so_a * 2);
    if(so_a%3===0)
    {
        document.write(" số đó chia hết cho 3 ");
    }
    else
    {
        document.write(" số đó không chia hết cho 3 ");
    }
}

if(so_a>8)
{
    b = so_a*1 +5;
    if(b%2===0)
    {

        document.write( "số đó là số chẵn ");
    }
    else
    {
        document.write("số đó là số lẻ ");
    }

}
if(so_a===8)
{
    console.log(" 8 ");
    document.write(" đây là số 8 ");
}

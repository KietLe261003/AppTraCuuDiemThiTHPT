function tinhdiemthi(diemthi1,diemthi2,diemthi3, diemthi4,diemlop12)
{
    let Avg=(diemthi1+diemthi2+diemthi3+diemthi4)/4;
    let diemtb=(Avg*7+diemlop12*3)/10;
    return diemtb; 
}
export default tinhdiemthi;
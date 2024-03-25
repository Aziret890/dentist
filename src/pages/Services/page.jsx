import { LuDot } from 'react-icons/lu'

import Our from '../../widgets/common/Our'
import Reviews from '../../widgets/common/Reviews'
import Additional from './components/Additional'
import Blocks from './components/Blocks'
import Card from './components/Card'
import Care from './components/Care'
import Description from './components/Description'
import Form from './components/Form'
import Implants from './components/Implants'
import Often from './components/Often'
import OurDoctors from './components/OurDoctors'
import Signup from './components/Signup'
import Stage from './components/Stage'
import Toothbrush from './components/Toothbrush'
import Useful from './components/Useful'
import Workexamples from './components/Workexamples'
import Year from './components/Year'
import Photos from './components/Photos'
import { useWindowSize } from '../../entity/hooks/useWindowSize'

const photos = [
  'https://s3-alpha-sig.figma.com/img/ff95/aa40/39487e91d12dd9260410c988b9848a55?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JedYpiPQHaeXaYtACBMgO1qFLMmFrt8GN2MNDBQESFTBkz1GGwZO-8gzr8Md0qxfMdGGs2rumR3rL~qBMFh3kBlfmdPaNxPdw2kN~F7uW0Mxf24tEjkeL-l8mBZqVtk2MK59qaA1KwZyJ4Gp6hCGJBxp66-jIm~fFGzboPLkHa-RLq6GtiuO9~lFEN5GBR1LBwUJyAXtCmY-oxDOzsWS5e1fXHE~3uZDPkxmO~h21LSo~ho67pGOwXd2vb1nCbXnHeKPWnhB4x22SbLqnScYDdINycV45ho~CImEY7~RZvIx1Vxg4GvLgHsgF0bBB2Mwh9qiXFLFlBga9X5Bxy5YDA__',
  'https://s3-alpha-sig.figma.com/img/83a6/bf79/9b86b6f2d0648120e18bbe3e80b25f1b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MfZtnQiEDwuAnS8RVCOkUQ55e1Fi6afsBZeSJ-j74M1oY5mdL-EZOg5JBahkWdcv8fb0w2Pgqh2Z9w~V2jGLObhIe7hWp1NprlgKUMMkQcHsEvs8MYX8xbkDgFcJx3EZP4oF~9nt7dmNJW5S8QlHGarlzSGEMwrvV6gn7zaXSrYy1qg88e7npo8EA7Hj6kjdkY6AlEQPOp0-YaqfYMncIZFxEsWfDdUQ9djcEinka7WEeuimt5M0sekf7bm8pvYpoqf2dOsuLh36bCyC-MWVcXC3QIRxcurC8A3q7A9lCIrh4ma-sP~stkAYbwPpq2EN2yVua6oSVI8BzbypZaUvlA__',
  'https://s3-alpha-sig.figma.com/img/7208/d8a6/c2ad5c9832612d7a17e6b5d3c449a6c5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAi80kHp9YxZ8zL0SLQms-DDBM5SN1qUO4y-Vca6ZsNUQJ6whxrBGV~0WCh3yYf3d0sB4c-vcRksBiFn6F1fDCiH4z1Sp6z0uIP62JwzQmn~i5la4GeTdVG3M2lQ1LdKmNUhCoOqPS08mg9~6afZquu0PVbIWTK5FVTUKbComDL7AtpoZnVgHiJFu13cTYrGpepIyCdBGuEbhZJv1loyY6hcpfEYfkhtPCyKwZWL32Z3dLzxw6DUwv8BTTvQ8esXgnwytRsioF7qyfzmgx7EBptZY2eRErUmDlNDEO2FtGtx5DrNTUq0pBpm3ynhb9EEZIO1YzV7yLv2fvWmTBXrxw__',
  'https://s3-alpha-sig.figma.com/img/ec1e/51d9/12287eeedcb8f02da7093010739b3715?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwO38vW2cWfuFr5974a6bfKeOjB0-Vgcvl73ytUGqbSTk27g2OAZ7ALeWfQq6WXseTFvmOlGZugEX0eMqcut-wGBhwNFRp63UbahP~6f7zWvNNRlKkdmzntHaCXwnZ1HcRGxzlos2VrAQE2akwv01X6URkn4B8e54Xgk1IGEBrHRRZj5o8Cm5jjqQZci98HA1XGEY4clMIEkMMp1dZNjTPViZztJCekMYknKUB9ibVIvcnpA2m2GLTqVP2YmmSj0O8Or5Z9U2PSaNuCA6xID2V-7y1b5aYI2nmSPLcU1W2GuLuJ75VdHwfgcOOE7srOis0lGMlFmtdztVEoxbeawQQ__',
  'https://s3-alpha-sig.figma.com/img/ff95/aa40/39487e91d12dd9260410c988b9848a55?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JedYpiPQHaeXaYtACBMgO1qFLMmFrt8GN2MNDBQESFTBkz1GGwZO-8gzr8Md0qxfMdGGs2rumR3rL~qBMFh3kBlfmdPaNxPdw2kN~F7uW0Mxf24tEjkeL-l8mBZqVtk2MK59qaA1KwZyJ4Gp6hCGJBxp66-jIm~fFGzboPLkHa-RLq6GtiuO9~lFEN5GBR1LBwUJyAXtCmY-oxDOzsWS5e1fXHE~3uZDPkxmO~h21LSo~ho67pGOwXd2vb1nCbXnHeKPWnhB4x22SbLqnScYDdINycV45ho~CImEY7~RZvIx1Vxg4GvLgHsgF0bBB2Mwh9qiXFLFlBga9X5Bxy5YDA__',
  'https://s3-alpha-sig.figma.com/img/83a6/bf79/9b86b6f2d0648120e18bbe3e80b25f1b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MfZtnQiEDwuAnS8RVCOkUQ55e1Fi6afsBZeSJ-j74M1oY5mdL-EZOg5JBahkWdcv8fb0w2Pgqh2Z9w~V2jGLObhIe7hWp1NprlgKUMMkQcHsEvs8MYX8xbkDgFcJx3EZP4oF~9nt7dmNJW5S8QlHGarlzSGEMwrvV6gn7zaXSrYy1qg88e7npo8EA7Hj6kjdkY6AlEQPOp0-YaqfYMncIZFxEsWfDdUQ9djcEinka7WEeuimt5M0sekf7bm8pvYpoqf2dOsuLh36bCyC-MWVcXC3QIRxcurC8A3q7A9lCIrh4ma-sP~stkAYbwPpq2EN2yVua6oSVI8BzbypZaUvlA__',
  'https://s3-alpha-sig.figma.com/img/7208/d8a6/c2ad5c9832612d7a17e6b5d3c449a6c5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAi80kHp9YxZ8zL0SLQms-DDBM5SN1qUO4y-Vca6ZsNUQJ6whxrBGV~0WCh3yYf3d0sB4c-vcRksBiFn6F1fDCiH4z1Sp6z0uIP62JwzQmn~i5la4GeTdVG3M2lQ1LdKmNUhCoOqPS08mg9~6afZquu0PVbIWTK5FVTUKbComDL7AtpoZnVgHiJFu13cTYrGpepIyCdBGuEbhZJv1loyY6hcpfEYfkhtPCyKwZWL32Z3dLzxw6DUwv8BTTvQ8esXgnwytRsioF7qyfzmgx7EBptZY2eRErUmDlNDEO2FtGtx5DrNTUq0pBpm3ynhb9EEZIO1YzV7yLv2fvWmTBXrxw__',
  'https://s3-alpha-sig.figma.com/img/ec1e/51d9/12287eeedcb8f02da7093010739b3715?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwO38vW2cWfuFr5974a6bfKeOjB0-Vgcvl73ytUGqbSTk27g2OAZ7ALeWfQq6WXseTFvmOlGZugEX0eMqcut-wGBhwNFRp63UbahP~6f7zWvNNRlKkdmzntHaCXwnZ1HcRGxzlos2VrAQE2akwv01X6URkn4B8e54Xgk1IGEBrHRRZj5o8Cm5jjqQZci98HA1XGEY4clMIEkMMp1dZNjTPViZztJCekMYknKUB9ibVIvcnpA2m2GLTqVP2YmmSj0O8Or5Z9U2PSaNuCA6xID2V-7y1b5aYI2nmSPLcU1W2GuLuJ75VdHwfgcOOE7srOis0lGMlFmtdztVEoxbeawQQ__',
]

const ServicesPage = () => {
  const { width } = useWindowSize()
  return (
    <div className="">
      <div className="bg-[#F2FAFB] py-3">
        <div className="container">
          <h1 className="flex items-center gap-2 text-[#2CB2BB]">
            Услуги <LuDot />
            Имплантация зубов с тройной гарантией
          </h1>
        </div>
      </div>
      <div className="margins">
        <Year />
        {width > 640 && <Our />}
        <Description />
        <Implants />
        <Stage />
        <Card />
        <Useful />
        <Form />
        <Blocks />
        <Workexamples />
        <Reviews />
        <OurDoctors />
        <Often />
        <Care />
        <Toothbrush />
        <Additional />
        <Signup />
        {/* <Exsemples /> */}
        <Photos photos={photos} />
      </div>
    </div>
  )
}

export default ServicesPage

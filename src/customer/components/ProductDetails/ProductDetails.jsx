import { useEffect, useState } from "react";
import { Label, Radio, RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import "./ProductDetails.scss";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../../Data/menA.js";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard.jsx";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProduct } from "../../../State/Product/Action.js";
import { addCartItemToCart } from "../../../State/Cart/Action.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { productId } = useParams()
  const productDetails = useSelector(store => store.product.product)
  const [selectedSize, setSelectedSize] = useState("");
  const handleAddToCart = () => {
    dispatch(addCartItemToCart({productId: productDetails?.id, size: selectedSize, quantity: productDetails?.quantity, price: productDetails?.price}))
    navigate('/cart')
  }
  useEffect(() => {
    dispatch(findProduct({ productId }))
  }, [productId])
  useEffect(() => {
    if(productDetails?.size)
      setSelectedSize(productDetails?.size[0]?.name)
  }, [productDetails])
  useEffect(()=>{

  }, [selectedSize])

  const handleChangeSize = (e)=>{
    setSelectedSize(e)
    
  }
  
  

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {/* {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} */}
            <li className="text-sm">
              <a
                // href={productDetails?.imageUrl}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {productDetails?.brand}
              </a>
            </li>
          </ol>
        </nav>
        {/* Images and description */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 p-5">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg w-[25rem] h-[35rem]">
              <img
                alt="Ảnh đã thay đổi url"
                src={productDetails?.imageUrl
                }
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <div className="w-full items-center">
              <div className="flex mt-5 w-[30rem] justify-between mx-auto items-start">
                {product.images.map((item, index) => {
                  return (
                    <div
                      className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg w-[5rem] h-[5rem] cursor-pointer"
                      key={index}
                    >
                      <img
                        alt={item.alt}
                        src={item.src}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
          {/* Product info */}
          <div className="flex flex-col place-items-start max-w-[30rem]">
            <div className="">
              <p className="text-md font-semibold">{productDetails?.title}</p>
            </div>
            <div className="mt-1">
              <p className="text-md text-gray-600">
                {productDetails?.description}
              </p>
            </div>
            <div className="flex mt-4 space-x-4">
              <div>
                <p>{productDetails?.price}</p>
              </div>
              <div className="line-through">
                <p>{productDetails?.discountedPrice}</p>
              </div>
              <div>
                <p className="text-red-600">5% Off</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-4 text-sm">
              <div>
                <Rating name="read-only" value={5.5} readOnly />
              </div>
              <div>
                <p className="opacity-60 ">{productDetails?.ratings}</p>
              </div>
              <div>
                <p className="text-purple-700">{productDetails?.numRatings}</p>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
              </div>

              <fieldset aria-label="Choose a size" className="mt-4">
                <RadioGroup
                  value={selectedSize}
                  onChange={e => handleChangeSize(e)}
                  className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  {
                    productDetails?.size.map(s => (
                      <Radio
                        key={s.name}
                        value={s.name}
                        disabled={!s.quantity>0}
                        className={classNames(
                          s.quantity > 0
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        <span>{s.name}</span>
                        {s.quantity > 0 ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                            >
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>

                    ))
                  }

                </RadioGroup>
              </fieldset>
            </div>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              sx={{ px: "2rem", bgcolor: "#9155fd", mt: "2rem" }}
            >
              Add to Cart
            </Button>
            <div className="description-product mt-[2rem] px-5 py-10">
              <p className="text-left">
                {productDetails?.description}
              </p>
            </div>
          </div>
        </section>

        {/* Rating and reviews */}
        <section className="lg:px-20 mt-20">
          <h1 className="font-semibold text-lg pb-4 text-left pl-5">
            Recent review & Rating
          </h1>
          <div className="border">
            <Grid container spacing={7} sx={{ padding: 0 }}>
              <Grid lg={6} md={12} item>
                <div>
                  {[2, 3, 5, 6].map((item, index) => (
                    <ProductReviewCard key={index} />
                  ))}
                </div>
              </Grid>
              <Grid item lg={6} md={12} sx={{ textAlign: "left" }}>
                <Grid item sx={{ padding: 2 }}>
                  <h1 className="text-lg font-semibold">Product Ratings</h1>
                  <div className="flex space-x-5">
                    <Rating
                      value={4.5}
                      precision={0.5}
                      readOnly
                      sx={{ fontSize: "1.3rem" }}
                    />
                    <p className="text-sm opacity-60">54890 Ratings</p>
                  </div>
                </Grid>
                <Box>
                  <Grid
                    container
                    rowSpacing={1}
                    sx={{ paddingLeft: 3, paddingTop: 2 }}
                  >
                    <Grid item md={12} justifyContent={"center"}>
                      <div className="flex space-x-5">
                        <p className="text-[0.8rem] opacity-60 min-w-16">
                          Excellent
                        </p>
                        <p className="align-middle items-center flex flex-col justify-center">
                          <LinearProgress
                            value={70}
                            color="success"
                            variant="determinate"
                            sx={{
                              height: 5,
                              width: {
                                lg: "15rem",
                                md: "30rem",
                                sm: "20rem",
                                xs: "10rem",
                              },
                              borderRadius: "1rem",
                            }}
                          />
                        </p>
                        <p className="text-[0.8rem] opacity-60">19259</p>
                      </div>
                    </Grid>
                    <Grid item md={12}>
                      <div className="flex space-x-5">
                        <p className="text-[0.8rem] opacity-60 min-w-16">
                          Very good
                        </p>
                        <p className="align-middle items-center flex flex-col justify-center">
                          <LinearProgress
                            value={70}
                            color="success"
                            variant="determinate"
                            sx={{
                              height: 5,
                              width: {
                                lg: "15rem",
                                md: "30rem",
                                sm: "20rem",
                                xs: "10rem",
                              },
                              borderRadius: "1rem",
                            }}
                          />
                        </p>
                        <p className="text-[0.8rem] opacity-60">19259</p>
                      </div>
                    </Grid>
                    <Grid item md={12}>
                      <div className="flex space-x-5">
                        <p className="text-[0.8rem] opacity-60 min-w-16">
                          Good
                        </p>
                        <p className="align-middle items-center flex flex-col justify-center">
                          <LinearProgress
                            value={70}
                            color="success"
                            variant="determinate"
                            sx={{
                              height: 5,
                              width: {
                                lg: "15rem",
                                md: "30rem",
                                sm: "20rem",
                                xs: "10rem",
                              },
                              borderRadius: "1rem",
                            }}
                          />
                        </p>
                        <p className="text-[0.8rem] opacity-60">19259</p>
                      </div>
                    </Grid>
                    <Grid item md={12}>
                      <div className="flex space-x-5">
                        <p className="text-[0.8rem] opacity-60 min-w-16">
                          Avarage
                        </p>
                        <p className="align-middle items-center flex flex-col justify-center">
                          <LinearProgress
                            value={70}
                            color="success"
                            variant="determinate"
                            sx={{
                              height: 5,
                              width: {
                                lg: "15rem",
                                md: "30rem",
                                sm: "20rem",
                                xs: "10rem",
                              },
                              borderRadius: "1rem",
                            }}
                          />
                        </p>
                        <p className="text-[0.8rem] opacity-60">19259</p>
                      </div>
                    </Grid>
                    <Grid item md={12}>
                      <div className="flex space-x-5">
                        <p className="text-[0.8rem] opacity-60 min-w-16">
                          Pool
                        </p>
                        <p className="align-middle items-center flex flex-col justify-center">
                          <LinearProgress
                            value={70}
                            color="success"
                            variant="determinate"
                            sx={{
                              height: 5,
                              width: {
                                lg: "15rem",
                                md: "30rem",
                                sm: "20rem",
                                xs: "10rem",
                              },
                              borderRadius: "1rem",
                            }}
                          />
                        </p>
                        <p className="text-[0.8rem] opacity-60">19259</p>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* similar products */}
        <section className="mt-20">
          <h1 className="font-semibold text-lg pb-4 text-left pl-24">
            Similar product
          </h1>
          <div className="flex flex-wrap px-20 mx-auto gap-y-5">
            {mens_kurta.map((item, index) => {
              {
              }
              return <HomeSectionCard product={item} key={index} />;
            })}
          </div>
        </section>
      </div>
    </div>

  );
}

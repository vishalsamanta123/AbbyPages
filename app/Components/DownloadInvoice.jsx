import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { apiCall, setDefaultHeader } from "../utils/httpClient";
// import EndPoints from "../utils/apiEndPoints";
// import moment from "moment";
import { apiCall, setDefaultHeader } from "../Utils/httpClient";
import EndPoints from "../Utils/apiEndPoints";
import { jsPDF } from "jspdf";

const DownloadInvoice = () => {
  let { order_id, business_type, order_booking_type } = useParams();
  const [orderDetail, setOrderDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getOrderDetail();
  }, []);
  const getOrderDetail = async () => {
    const token = localStorage.getItem("AuthToken");

    try {
      setIsLoading(true);
      var params = {
        order_id: order_id,
        business_type: business_type,
        order_booking_type: order_booking_type,
      };
      const header = { "Content-Type": "application/json", token: token };

      console.log("params: ", params);
      const { data } = await apiCall(
        "post",
        EndPoints.GETORDERDETAIL,
        params,
        header
      );
      console.log("data: ==>", data);
      if (data.status === 200) {
        setOrderDetail(data.data);
        setIsLoading(false);
      } else if (data.status === 201) {
        setOrderDetail([]);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  console.log("orderDetail", orderDetail);
  return (
    <div>
      <div class="page-content container">
        <div class="page-header text-blue-d2">
          <h1 class="page-title text-secondary-d1">
            Invoice
            <small class="page-info">
              <i class="fa fa-angle-double-right text-80"></i>
              ID: {orderDetail.order_id}
            </small>
          </h1>

          <div class="page-tools">
            <div class="action-buttons">
              <a
                class="btn bg-white btn-light mx-1px text-95"
                onClick={() => {
                  const input = document.getElementById("download_container");
                  const pdf = new jsPDF({
                    unit: "px",
                    format: "letter",
                    userUnit: "px",
                  });
                  pdf.html(input, { html2canvas: { scale: 0.37 } }).then(() => {
                    pdf.save("invoice.pdf");
                  });
                }}
                download
                data-title="PDF"
              >
                <i
                  class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"
                  style={{ color: "black" }}
                ></i>
                Download
              </a>
            </div>
          </div>
        </div>

        <div
          class="container px-0"
          id="download_container"
          style={{ marginLeft: "20px", marginRight: "20px" }}
        >
          <div class="row mt-4">
            <div class="col-12 col-lg-12">
              <div class="row">
                <div class="col-12">
                  <div class="text-center text-150">
                    <img
                      src="../images/abbylogo-YLWWHT400x160.png"
                      alt="AbbyPages"
                    />
                  </div>
                </div>
              </div>

              <hr class="row brc-default-l1 mx-n1 mb-4" />

              <div class="row">
                <div class="col-sm-6">
                  <div>
                    <span class="text-sm text-grey-m2 align-middle">To:</span>
                    <span class="text-600 text-110 text-blue align-middle">
                      {`${orderDetail?.order_user_info?.first_name} ${orderDetail?.order_user_info?.last_name}`}
                    </span>
                  </div>
                  <div class="text-grey-m2">
                    <div class="my-1">
                      Address: {orderDetail?.order_user_info?.address}
                    </div>
                    <div class="my-1">
                      Email: {orderDetail?.order_user_info?.email}
                    </div>
                    {/* <div class="my-1">Mobile: {orderDetails?.order_user_info?.mobile}</div> */}
                    <div class="my-1">
                      <i class="fa fa-phone fa-flip-horizontal text-secondary"></i>{" "}
                      <b class="text-600">
                        {orderDetail?.order_user_info?.mobile}
                      </b>
                    </div>
                  </div>
                </div>

                <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                  <hr class="d-sm-none" />
                  <div class="text-grey-m2">
                    <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                      Invoice
                    </div>
                    <div class="my-2">
                      <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                      <span class="text-600 text-90">ID:</span>{" "}
                      {orderDetail.order_id}
                    </div>
                    <div class="my-2">
                      <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                      <span class="text-600 text-90">Issue Date:</span>
                      {orderDetail.create_order}
                    </div>
                    <div class="my-2">
                      <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                      <span class="text-600 text-90">Payment Method:</span>
                      Key_pending
                    </div>
                    <div class="my-2">
                      <i class="fa fa-circle text-blue-m2 text-xs mr-1"></i>{" "}
                      <span class="text-600 text-90">Status:</span>{" "}
                      <span class="badge badge-warning badge-pill px-25">
                        {orderDetail.order_process == 0
                          ? "Pending"
                          : orderDetail.order_process == 1
                          ? "Accepted"
                          : orderDetail.order_process == 2
                          ? "Packed"
                          : orderDetail.order_process == 3
                          ? "Shipped"
                          : "Delivered"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {orderDetail.business_type == 1 ? (
                <div class="mt-4">
                  <div class="row text-600 text-white bgc-default-tp1 py-25">
                    <div class="d-none d-sm-block col-1">#</div>
                    <div class="d-none d-sm-block col-1">Item Id</div>
                    <div class="col-5 col-sm-2">Item Name</div>
                    <div class="col-5 col-sm-2">Description</div>
                    <div class="d-none d-sm-block col-4 col-sm-2">Qty</div>
                    <div class="d-none d-sm-block col-sm-1">Unit Price</div>
                    <div class="d-none d-sm-block col-sm-1">Unit Discount</div>
                    <div class="col-1">Amount</div>
                  </div>

                  {orderDetail?.item?.map((item, i) => {
                    return (
                      <div class="text-95 text-secondary-d3">
                        <div class="row mb-2 mb-sm-0 py-25">
                          <div class="d-none d-sm-block col-1"> {i + 1}</div>

                          <div class="d-none d-sm-block col-1">
                            {item.item_id}
                          </div>

                          <div class="col-5 col-sm-2">{item.item_name}</div>
                          <div class="col-5 col-sm-2">
                            {item.item_description}
                          </div>
                          <div class="d-none d-sm-block col-2">
                            {item.quantity}
                          </div>
                          <div class="d-none d-sm-block col-1 text-95">
                            {item.price}
                          </div>
                          <div class="d-none d-sm-block col-1 text-95">
                            {item.item_discount}
                          </div>
                          <div class="col-1 text-secondary-d2">
                            {(item.price - item.item_discount) * item.quantity}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div class="row border-b-2 brc-default-l2"></div>

                  <div class="row mt-3">
                    <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                      Extra note such as company or payment information...
                    </div>

                    <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                      <div class="row my-2"></div>

                      <div class="row my-2"></div>

                      <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                        <div class="col-7 text-right">Total Amount</div>
                        <div class="col-5">
                          <span class="text-150 text-success-d3 opacity-2">
                            {orderDetail.total_amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <span class="text-secondary-d1 text-105">
                      ABBYPAGES | All Black Business Yellow Pages. Proudly Built
                      in Central Florida with by The Black Own Company, LLC.
                    </span>
                    {/* <a
                    href="#"
                    class="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0"
                  >
                    Pay Now
                  </a> */}
                  </div>
                </div>
              ) : orderDetail.business_type == 2 ? (
                <div class="mt-4">
                  <div class="row text-600 text-white bgc-default-tp1 py-25">
                    <div class="d-none d-sm-block col-1">#</div>
                    <div class="d-none d-sm-block col-1">Product Id</div>
                    <div class="col-5 col-sm-2">Product Name</div>
                    <div class="col-5 col-sm-2">Description</div>
                    <div class="d-none d-sm-block col-4 col-sm-2">Qty</div>
                    <div class="d-none d-sm-block col-sm-1">Unit Price</div>
                    <div class="d-none d-sm-block col-sm-1">Unit Discount</div>
                    <div class="col-1">Net Amount</div>
                  </div>

                  {orderDetail?.item?.map((item, i) => {
                    return (
                      <div class="text-95 text-secondary-d3">
                        <div class="row mb-2 mb-sm-0 py-25">
                          <div class="d-none d-sm-block col-1"> {i + 1}</div>

                          <div class="d-none d-sm-block col-1">
                            {item.product_id}
                          </div>

                          <div class="col-5 col-sm-2">{item.product_name}</div>
                          <div class="col-5 col-sm-2">
                            {item.product_description}
                          </div>
                          <div class="d-none d-sm-block col-2">
                            {item.quantity}
                          </div>
                          <div class="d-none d-sm-block col-1 text-95">
                            {item.price}
                          </div>
                          <div class="d-none d-sm-block col-1 text-95">
                            {item.product_discount}
                          </div>
                          <div class="col-1 text-secondary-d2">
                            {(item.price - item.product_discount) *
                              item.quantity}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div class="row border-b-2 brc-default-l2"></div>

                  <div class="row mt-3">
                    <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                      Extra note such as company or payment information...
                    </div>

                    <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                      <div class="row my-2"></div>

                      <div class="row my-2"></div>

                      <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                        <div class="col-7 text-right">Total Amount</div>
                        <div class="col-5">
                          <span class="text-150 text-success-d3 opacity-2">
                            {orderDetail.total_amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <span class="text-secondary-d1 text-105">
                      ABBYPAGES | All Black Business Yellow Pages. Proudly Built
                      in Central Florida with by The Black Own Company, LLC.
                    </span>
                    {/* <a
                    href="#"
                    class="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0"
                  >
                    Pay Now
                  </a> */}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadInvoice;

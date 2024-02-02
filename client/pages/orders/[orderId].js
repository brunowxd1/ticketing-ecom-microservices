import { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import StripCheckout from "react-stripe-checkout";
import Router from "next/router";

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: () => {
      Router.push("/orders");
    },
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();

      setTimeLeft(Math.round(msLeft / 1000));
    };
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  return (
    <div>
      <h1>{order.ticket.title}</h1>
      {timeLeft > 0 ? (
        <>
          <span>Time left to pay: {timeLeft} seconds</span>
          <StripCheckout
            token={({ id }) => doRequest({ token: id })}
            stripeKey="pk_test_51Of9RkGuP58TNAI7geOLVLcaCKcKYnV7FP9OWGGxUIwSQ0uiwnDiFPyGRzXRutCUYiyrA5ImcmlJZsUUmfdtIEUj00f9HiP5OC"
            amount={order.ticket.price * 100}
            email={currentUser.email}
          />
          {errors}
        </>
      ) : (
        <span>Order expired</span>
      )}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;

  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;

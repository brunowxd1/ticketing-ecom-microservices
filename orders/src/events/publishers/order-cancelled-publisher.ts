import { Publisher, OrderCancelledEvent, Subjects } from "@bjftickets/commom";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}

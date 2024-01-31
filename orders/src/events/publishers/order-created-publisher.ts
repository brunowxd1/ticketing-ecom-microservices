import { Publisher, OrderCreatedEvent, Subjects } from "@bjftickets/commom";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  
}

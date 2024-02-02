import { Publisher, PaymentCreatedEvent, Subjects } from "@bjftickets/commom";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}

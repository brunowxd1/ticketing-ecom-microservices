import { Publisher, Subjects, TicketUpdatedEvent } from "@bjftickets/commom";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

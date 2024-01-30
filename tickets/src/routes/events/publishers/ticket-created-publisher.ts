import { Publisher, Subjects, TicketCreatedEvent } from "@bjftickets/commom";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

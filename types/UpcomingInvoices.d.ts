declare module 'expresspayments' {
    namespace ExpressPayments {
        type UpcomingInvoice = Omit<ExpressPayments.Invoice, 'id'>;
    }
}

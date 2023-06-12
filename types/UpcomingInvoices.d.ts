declare module 'expressplatby' {
    namespace ExpressPlatby {
        type UpcomingInvoice = Omit<ExpressPlatby.Invoice, 'id'>;
    }
}

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const req = await request.json();

    const reservation = await prisma.TripReservation.findMany({
        where: {
            tripId: req.tripId,
            // VERIFICA SE EXISTE RESERVA ENTRE AS DATAS
            startDate: {
                lte: new Date(req.endDate) // MENOR OU IGUAL A DATA FINAL
            },
            endDate: {
                gte: new Date(req.startDate) // MAIOR OU IGUAL A DATA INICIAL
            },
        },
    });

    if (reservation.length > 0) {
        return new NextResponse(
            JSON.stringify({
                error: {
                    code: "TRIP_ALREADY_RESERVED"
                }
            })
        );
    }

    return new NextResponse(
        JSON.stringify({
            success: true
        })
    );
}

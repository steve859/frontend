"use client"

import { ClientHeader } from "@/components/clients/ClientHeader"
import { ClientTable } from "@/components/clients/ClientTable"
import { ClientStatsCard } from "@/components/clients/ClientStatsCard"

export default function ClientsPage() {
    return (
        <div className="space-y-6">

            <ClientHeader />

            <div className="flex gap-6">


                <div className="flex-1">
                    <ClientTable />
                </div>


                <div className="w-80">
                    <ClientStatsCard />
                </div>
            </div>
        </div>
    )
}

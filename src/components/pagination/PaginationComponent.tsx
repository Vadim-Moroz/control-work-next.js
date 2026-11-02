"use client";

import { useRouter, useSearchParams } from "next/navigation";

const PaginationComponent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const page = Number(searchParams.get("page") ?? "1");

    return (
        <div className="PageButtons">
            <button onClick={() => {
                const params = new URLSearchParams(searchParams.toString());
                params.set("page", String(page + 1));
                router.push(`?${params.toString()}`);
            }}>
                next
            </button>

            <button onClick={() => {
                if (page > 1) {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set("page", String(page - 1));
                    router.push(`?${params.toString()}`);
                }
            }}>
                prev
            </button>
        </div>
    );
};

export default PaginationComponent;
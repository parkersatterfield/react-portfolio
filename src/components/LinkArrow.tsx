function LinkArrow({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M5 19 19 5M5 5h14v14" />
        </svg>
    );
}

export default LinkArrow;

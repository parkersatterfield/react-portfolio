function LinkArrow({ className, direction = 'diagonal' }: { className?: string; direction?: 'diagonal' | 'up' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d={direction === 'up' ? 'M12 20V4m-6 6 6-6 6 6' : 'M5 19 19 5M5 5h14v14'} />
        </svg>
    );
}

export default LinkArrow;

import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { setDefault } from "../utils/helpers";

interface ModalWrapperProps {
	isOpen: boolean;
	onClose: () => void;
	closeOnClickBg?: boolean;
	children: React.ReactNode;
}

export default function ModalWrapper({
	isOpen,
	onClose,
	children,
	closeOnClickBg = false,
}: ModalWrapperProps) {
	const modalRef = useRef<HTMLDivElement | null>(null);
	const handleClose = useCallback(() => {
		onClose();
		setDefault();
	}, [onClose]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				handleClose();
			}
		};
		const handlePressEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleClose();
			}
		};

		if (isOpen) {
			document.body.style.height = "100vh";
			document.body.style.overflowY = "hidden";

			if (closeOnClickBg) {
				document.addEventListener("mousedown", handleClickOutside);
				document.addEventListener("keydown", handlePressEsc);
			}
		}

		return () => {
			if (isOpen && closeOnClickBg) {
				document.removeEventListener("mousedown", handleClickOutside);
				document.removeEventListener("keydown", handlePressEsc);
			}
		};
	}, [isOpen, handleClose, closeOnClickBg]);

	return isOpen
		? createPortal(
				<div
					id="wrapper"
					className="fixed inset-0 z-40 flex w-screen h-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black/25 outline-none focus:outline-none"
				>
					<div className="flex w-full max-w-5xl p-5" ref={modalRef}>
						{children}
					</div>
				</div>,
				document.body,
		  )
		: null;
}

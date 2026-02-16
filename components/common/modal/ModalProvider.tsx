"use client"

import { createContext, useContext, useState } from "react"
import Modal from "@/components/common/modal/Modal"

interface ModalOptions {
  title: string
  size?: 'default' | 'sm' | undefined
  description: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
}

interface ModalContextType {
  openModal: (options: ModalOptions) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalOptions, setModalOptions] = useState<ModalOptions | null>(null)

  const openModal = (options: ModalOptions) => {
    setModalOptions(options)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {modalOptions && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          onConfirm={() => {
            modalOptions.onConfirm?.()
            closeModal()
          }}
          size={modalOptions.size}
          title={modalOptions.title}
          description={modalOptions.description}
          confirmText={modalOptions.confirmText}
          cancelText={modalOptions.cancelText}
        />
      )}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within ModalProvider")
  }
  return context
}

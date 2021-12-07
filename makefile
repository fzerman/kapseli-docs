BASEDIR=$(CURDIR)
OUTPUTDIR=$(BASEDIR)/build

FTP_HOST=stingydeveloper.com
FTP_USER=pafsting
FTP_TARGET_DIR=/public_html/kapseli



help:
	@echo 'Makefile for Kapslei Documentation                                        '
	@echo '                                                                          '
	@echo 'Usage:                                                                    '
	@echo '   make ftp_upload                     upload the web site via FTP        '
	@echo '                                                                          '

ftp_upload:
	lftp ftp://$(FTP_USER)@$(FTP_HOST) -e "mirror -R $(OUTPUTDIR) $(FTP_TARGET_DIR) ; quit"


.PHONY: ftp_upload
